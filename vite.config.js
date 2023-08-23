/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const LIB_NAME = 'vector-math'

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: LIB_NAME,
      fileName: LIB_NAME,
    },
  },
  plugins: [
    dts({
      exclude: '**/*.test.ts',
    }),
  ],
})
