import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@bnm/tokens': path.resolve(__dirname, '../../packages/tokens/src'),
      '@bnm/theme': path.resolve(__dirname, '../../packages/theme/src'),
      '@bnm/primitives': path.resolve(__dirname, '../../packages/primitives/src'),
      '@bnm/sections': path.resolve(__dirname, '../../packages/sections/src'),
      '@bnm/utils': path.resolve(__dirname, '../../packages/utils/src')
    }
  }
})