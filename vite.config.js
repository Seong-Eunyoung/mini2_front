import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//export default defineConfig({
//  base: './',
//  plugins: [react()],
//
//  server: {
//    port: 3000
//  },
//  resolve: {
//    alias: {
//      src: "/src",
//    }
//  },   
//})

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  //resolve: {
  //  alias: {
  //    src: "/src",
  //  }
  //},   
});
