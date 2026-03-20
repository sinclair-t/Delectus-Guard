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
        keyholding: './keyholding.html',
        leisure: './leisure.html',
        'matchday-security': './matchday-security .html',
        'nhs-healthcare': './NHS-healthcare.html',
        'close-protect': './close-protecr.html',
        'project-single': './project-single.html',
        'surveillance-security': './surveillance-security.html'
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
