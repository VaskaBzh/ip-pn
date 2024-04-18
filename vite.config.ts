import { defineConfig } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ElementPlus(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@img": path.resolve(__dirname, "./src/assets/images"),
      "@icon": path.resolve(__dirname, "./src/assets/icons"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "src/styles/functions.scss"; @import "src/styles/consts.scss";',
      },
    },
  },
})
