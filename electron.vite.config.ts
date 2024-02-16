import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: "app/src/main"
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: "app/src/preload"
      }
    }
  },
  renderer: {
    root: "app/src/renderer",
    build: {
      rollupOptions: {
        input: "app/src/renderer"
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('app/src/renderer/src')
      }
    },
    plugins: [solid()]
  }
})
