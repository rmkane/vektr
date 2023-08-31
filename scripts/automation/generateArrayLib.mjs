/* eslint-disable no-console */

// ============================================================================
// Filename   : generateArrayLib.mjs
// Decription : This script copies converts the object math to array math.
// ============================================================================

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import { ArgumentParser } from 'argparse'
import { rimraf } from 'rimraf'

import rewriteFiles from './modules/updateFiles.mjs'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SCRIPT_VERSION = '1.0.0'

const { dry_run: dryRunMode, quiet: quietMode } = parseArgs()

// Directory constants
const SRC_DIR = path.resolve(__dirname, '../../src')
const MATH_DIR = path.resolve(SRC_DIR, 'core/math')
const OBJECT_DIR = path.resolve(MATH_DIR, 'object')
const ARRAY_DIR = path.resolve(MATH_DIR, 'array')

main() // Call main function

async function main() {
  if (dryRunMode) {
    // Do not slience this message
    console.log('ATTENTION: The script will not actually modify any files')
  }

  showMessage('Removing: %s', ARRAY_DIR)
  if (!dryRunMode) {
    await rimraf(ARRAY_DIR)
  }

  showMessage('Copying %s to %s', OBJECT_DIR, ARRAY_DIR)
  if (!dryRunMode) {
    await fs.promises.cp(OBJECT_DIR, ARRAY_DIR, { recursive: true })
  }

  showMessage('Rewriting files...')
  rewriteFiles(
    ARRAY_DIR,
    async function (file) {
      if (!dryRunMode) {
        rewriteFileContent(file, { encoding: 'utf-8' })
      }
    },
    { recursive: true }
  )
}

async function rewriteFileContent(file, options) {
  const fileContent = await fs.promises.readFile(file, options)

  const updatedContent = fileContent
    .replace(/Object/g, 'Array')
    .replace(/object/g, 'array')
    .replace(/\.x\b/g, '[0]') // x-coordinate to [0]
    .replace(/\.y\b/g, '[1]') // y-coordinate to [1]
    .replace(/\.z\b/g, '[2]') // z-coordinate to [2]
    .replace(/\.radius\b/g, '[0]') // radius to [0]
    .replace(/\.polarAngle\b/g, '[1]') // polarAngle to [1]
    .replace(/\{ x: (.+), y: (.+) \}/g, '[$1, $2]') // Inline object
    .replace(/\{ x: (.+), y: (.+), z: (.+) \}/g, '[$1, $2, $3]') // Inline object
    .replace(/\{\n\s*\w+:\s(.+),\n\s*\s+\w+:\s(.+),\n\s*\}/g, '[$1, $2]') // Polar
    .replace(/{ ...([A-Z_]+) }/g, '[...$1]') // Unit test constant spread

  await fs.promises.writeFile(file, updatedContent, options)
}

function parseArgs() {
  const parser = new ArgumentParser({
    description: 'This script copies converts the object math to array math',
    epilog: 'Please not that this will overwrite the target directory',
  })
  parser.add_argument('--dry-run', { action: 'store_true', help: 'simulate the script' })
  parser.add_argument('-q', '--quiet', { action: 'store_true', help: 'silence ouput' })
  parser.add_argument('-v', '--version', { action: 'version', version: SCRIPT_VERSION })
  return parser.parse_args()
}

function showMessage(...args) {
  if (!quietMode) {
    console.log(...args)
  }
}
