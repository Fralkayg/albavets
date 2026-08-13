import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from the apex of the custom domain (albavets.cl), not a
  // GitHub Pages project subpath, so assets resolve from root.
  base: '/',
  plugins: [react(), tailwindcss()],
})
