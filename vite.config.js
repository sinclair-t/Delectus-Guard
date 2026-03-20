import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        contact: './contact.html',
        'manned-guarding': './manned-guarding.html',
        'corporate-security': './corporate-security.html',
        'residential-security': './residential-security.html',
        'event-security': './event-security.html',
        'construction-security': './construction-security.html',
        'vip-protection': './vip-protection.html',
        'mobile-patrol': './mobile-patrol.html',
        'risk-assessment': './risk-assessment.html',
        'access-control': './access-control.html',
        'industrial-security': './industrial-security.html'
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `images/[name][extname]`;
          } else if (/\.css$/.test(assetInfo.name)) {
            return `css/[name][extname]`;
          }
          return `assets/[name][extname]`;
        }
      }
    }
  },
  server: {
    port: 5173,
    strictPort: false,
    middlewareMode: false
  },
  optimizeDeps: {
    exclude: []
  }
});
