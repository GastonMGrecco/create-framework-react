import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      publicDir: '/public',
      plugins: [react()],
      esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
        exclude: [],
      },
      server: {
        open:'public/',
        port:3000,
      },
      preview: {
        open:'index.html',
        port: 4000,
      }
    }
  } else {
    return {
      root: "./public",
      base: "./",
      plugins: [react()],
      esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
        exclude: [],
      },
      build: {
        outDir: "../dist"
      },
    
    }
  }
})