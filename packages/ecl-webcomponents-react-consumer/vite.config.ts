import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/build/': {
        target: 'src/assets/',
        rewrite: (path) => path.replace(/^\/build/, ''),
      },
    },
  },
})
