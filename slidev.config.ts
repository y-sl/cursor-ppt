import { defineConfig } from '@slidev/cli'

export default defineConfig({
  // 为 GitHub Pages 设置基础路径
  routerMode: 'hash',
  
  // 生产环境的基础路径
  buildBase: '/cursor-ppt/',
  
  // 启用一些有用的功能
  download: true,
  exportFilename: '驾驭AI重塑开发-ysl',
  
  // 优化构建
  build: {
    rollupOptions: {
      external: []
    }
  }
}) 