import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ecommerce/', // ✅ lowercase and matches your deployment folder
  plugins: [react()],
})
