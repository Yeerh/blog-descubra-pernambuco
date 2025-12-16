import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← Nova linha
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],  // ← Adicione tailwindcss() aqui
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})