# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Slidev 的演示文稿项目，主题为"驾驭AI，重塑开发"，分享 Cursor 高效编程理念与实践。

## 核心命令

### 开发环境
```bash
cd slidev
npm install
npm run dev
```
访问 http://localhost:3030 查看演示文稿

### 构建和导出
```bash
cd slidev
npm run build       # 构建静态文件
npm run export      # 导出为PDF或其他格式
```

## 项目架构

### 文件结构
- `slidev/slides.md` - 主要的演示文稿内容，使用 Markdown 格式
- `slidev/components/` - Vue 组件，如交互式计数器组件
- `slidev/docs/` - 演讲相关文档：
  - `ppt.md` - 演示文稿大纲和内容规划
  - `演讲稿.md` - 详细演讲稿
  - 其他支持文档
- `slidev/pages/` - 额外的幻灯片页面
- `slidev/snippets/` - 代码片段

### 技术栈
- **Slidev** - 基于 Vue 3 的演示文稿框架
- **Vue 3** - 组件开发
- **TypeScript** - 类型支持
- **UnoCSS/Windi CSS** - 样式系统（使用原子化 CSS）
- **Iconify** - 图标系统

### 主题和样式
项目使用自定义渐变背景主题，在 `slides.md` 顶部的 `<style>` 标签中定义：
- 深蓝紫色渐变背景
- 动态光效效果
- 响应式布局

### 内容管理
- 主要内容在 `slides.md` 中，使用 Slidev 的 Markdown 扩展语法
- 支持 Vue 组件嵌入
- 支持代码高亮和动画过渡
- 文档和演讲稿分离管理，便于协作

### 部署配置
- `netlify.toml` - Netlify 部署配置
- `vercel.json` - Vercel 部署配置

## 注意事项
- 所有主要工作都在 `slidev/` 目录下进行
- 修改 `slides.md` 后，开发服务器会自动重新加载
- Vue 组件需要在 `components/` 目录下创建并在 slides 中引用
- 样式修改主要在 `slides.md` 的 style 标签中或创建单独的 CSS 文件