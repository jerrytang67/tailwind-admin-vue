import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    "@": path.resolve(__dirname, "src"),
    "@comps": path.resolve(__dirname, "src/components"),
    "@css": path.resolve(__dirname, "src/assets/css"),
    "@layouts": path.resolve(__dirname, "src/layouts"),
  },
})
