import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader(), // додає підтримку імпорту svg як компонентів
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
