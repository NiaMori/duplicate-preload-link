import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks (id) {
          if (id.includes('/a-use-common.js')) {
            return 'a'
          }

          if (id.includes('/b-use-common.js')) {
            return 'b'
          }

          if (id.includes('/common.js')) {
            return 'common'
          }
        }
      }
    }
  }
})
