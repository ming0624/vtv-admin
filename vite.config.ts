/*
 * @Date: 2021-04-18 11:10:40
 * @LastEditors: yuechu
 * @LastEditTime: 2021-04-18 14:18:28
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果报错path,__dirname找不到，需要安装node,执行npm i @types/node --save-dev
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style/index.sass";'
      }
    }
  }
})
