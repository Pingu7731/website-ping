import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        // shared stuff (react, vite/rollup helpers) has its own chunk, otherwise it get pulled into the
        // 3d chunk and the page has to download the whole three.js before it can render
        manualChunks(id) {
          if (/node_modules\/(react|react-dom|scheduler)\/|vite\/preload-helper|commonjsHelpers/.test(id)) return 'vendor'
          if (/node_modules\/(three|three-stdlib|@react-three)\//.test(id)) return 'three'
          if (/node_modules\/(gsap|@gsap)\//.test(id)) return 'gsap'
          if (/node_modules\/matter-js\//.test(id)) return 'matter'
        }
      }
    }
  }
})