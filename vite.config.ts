import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import TSConfigPath from 'vite-tsconfig-paths'
import solid from 'vite-plugin-solid'

export default defineConfig({
  server: { port: 8080 },

  plugins: [vanillaExtractPlugin(), TSConfigPath(), solid()]
})
