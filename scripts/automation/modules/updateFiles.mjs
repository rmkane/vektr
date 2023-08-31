import fs from 'node:fs'
import path from 'node:path'

import testValue from './testValue.mjs'

const defaultOptions = {
  encoding: 'utf-8',
  recursive: false,
  test: null,
}

async function __rewrite(directory, fileCallback, options) {
  const files = await fs.promises.readdir(directory)
  for (const relativeFile of files) {
    const file = path.resolve(directory, relativeFile)
    const stat = await fs.promises.stat(file)
    if (stat.isFile() && testValue(path.basename(file), options.test)) {
      fileCallback(file)
    } else if (stat.isDirectory() && options.recursive) {
      __rewrite(file, fileCallback, options)
    }
  }
}

/**
 * Recursively iterate through a directory asynchronously, and perform an operation on each file.
 *
 * @param {string} directory - The current directory
 * @param {function} fileCallback - The callback function that executes on the current file
 * @param {object} options - Options
 * @param {string} [options.encoding="utf-8"] - File encoding. Default is `"utf-8"`
 * @param {boolean} [options.recursive=false] - Recursive mode. Default is `false`
 * @param {string | RegExp | function} [options.test=/.+/] - File pattern filter. Default is `/.+/`
 */
async function rewriteFiles(directory, fileCallback, options) {
  const opts = { ...defaultOptions, ...options }
  return __rewrite(directory, fileCallback, opts)
}

export default rewriteFiles
