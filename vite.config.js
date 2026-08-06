import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import vercel from 'vite-plugin-vercel';

// export default defineConfig({
//   plugins: [
//     react(),
//     vercel()
//   ],
//   vercel: {
//     rewrites: [
//       { "source": "/(.*)", "destination": "/index.html" }
//     ]
//   }
// });

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/user': {
        target: 'https://ecrownode-1.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/user/, '/user'),
      },
    },
  },
})
