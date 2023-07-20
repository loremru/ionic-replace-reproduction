import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import PluginVue from '@vitejs/plugin-vue'
import PluginWindiCSS from 'vite-plugin-windicss'
import ViteFonts from 'vite-plugin-fonts'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

function pathResolve(pathStr) {
  return path.resolve(__dirname, pathStr)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    PluginVue(),
    PluginWindiCSS({
      scan: {
        dirs: ['.'],
        fileExtensions: ['.vue', '.js', '.ts'],
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.json', '.vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
    dedupe: ['vue'],
  },
  server: {
    port: 3111,
  },
  optimizeDeps: {
    include: ['quill'],
  },
  // build: {
  //   rollupOptions: {
  //     external: ['@awesome-cordova-plugins/core'],
  //   },
  // },
})
