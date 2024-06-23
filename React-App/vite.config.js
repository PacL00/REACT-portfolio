import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    // rollupOptions: {
    //   input: path.resolve(__dirname, 'index.html'),
    //},
    outDir: 'dist', 
  },
})
