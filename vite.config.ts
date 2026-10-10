import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5190,
    open: true,
    /**
     * 把 /api 请求转发到本地 IMAP 代理服务。
     * 好处：前端用相对路径即可，生产环境改成同源部署也无需改代码；
     * 同时避免浏览器直连代理端口时可能出现的 CORS 问题。
     */
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8800',
        changeOrigin: true,
        // IMAP 真实连接较慢，代理侧超时放宽到 60 秒
        timeout: 60_000,
        proxyTimeout: 60_000,
      },
    },
  },
});
