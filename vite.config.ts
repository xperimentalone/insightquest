import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/insightquest/',  
  server: {
    host: '0.0.0.0',
    port: 5000,
    hmr: {
      host: process.env.REPLIT_DEV_DOMAIN,
      clientPort: 443,
      protocol: 'wss'
    }
  },
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
})
