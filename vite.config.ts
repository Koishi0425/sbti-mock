import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // 部署配置
  // 本地预览和相对路径部署（腾讯云）: base: './'
  // GitHub Pages 子路径部署: base: '/sbti-mock/'
  base: './',
})
