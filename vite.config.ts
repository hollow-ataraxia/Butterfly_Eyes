import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'
import TSConfigPath from 'vite-tsconfig-paths'
import solid from 'vite-plugin-solid'

export default defineConfig({
  root: 'src',
  publicDir: resolve(__dirname, 'public'),
  build: {
    target: 'esnext',
    outDir: resolve(__dirname, 'dist')
  },
  server: { port: 8080 },

  plugins: [vanillaExtractPlugin(), TSConfigPath(), solid()]
})
