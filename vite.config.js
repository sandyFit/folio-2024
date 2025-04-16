import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Opens browser automatically
      filename: 'dist/stats.html', // Optional: save a static file
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // bump limit from 500kB to 1000kB
    rollupOptions: {
      output: {
        manualChunks(id) {
          // This splits vendor code into separate chunks
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'
            if (id.includes('three')) return 'vendor-three'
            if (id.includes('@fortawesome')) return 'vendor-icons'
            return 'vendor'
          }
        },
      },
    },
  },
})
