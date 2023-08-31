/* eslint-disable no-console */

// ============================================================================
// Filename   : generateArrayLib.mjs
// Decription : This script copies converts the object math to array math.
// ============================================================================

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import { rimraf } from 'rimraf'

import rewriteFiles from './modules/updateFiles.mjs'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Directory constants
const SRC_DIR = path.resolve(__dirname, '../../src')
const MATH_DIR = path.resolve(SRC_DIR, 'core/math')
const OBJECT_DIR = path.resolve(MATH_DIR, 'object')
const ARRAY_DIR = path.resolve(MATH_DIR, 'array')

console.log('Removing: %s', ARRAY_DIR)
await rimraf(ARRAY_DIR)

console.log('Copying %s to %s', OBJECT_DIR, ARRAY_DIR)
await fs.promises.cp(OBJECT_DIR, ARRAY_DIR, { recursive: true })

console.log('Writing files...')
const ioOptions = { encoding: 'utf-8' }
rewriteFiles(
  ARRAY_DIR,
  async function (file) {
    const fileContent = await fs.promises.readFile(file, ioOptions)
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

    await fs.promises.writeFile(file, updatedContent, ioOptions)
  },
  { recursive: true }
)
