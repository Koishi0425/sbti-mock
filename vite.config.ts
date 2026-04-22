import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // GitHub Pages 部署支持
  // 开发环境: base 为空，使用相对路径
  // 生产环境: base 为 /sbti-mock/
  base: process.env.NODE_ENV === 'production' ? '/sbti-mock/' : '',
})
