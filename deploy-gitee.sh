#!/bin/bash

# Gitee Pages 部署脚本
echo "🚀 开始构建和部署到 Gitee Pages..."

# 构建项目
echo "📦 构建项目..."
npm run build

# 进入构建目录
cd dist

# 初始化 git（如果需要）
if [ ! -d .git ]; then
  git init
  git checkout -b gh-pages
fi

# 添加所有文件
git add -A
git commit -m "deploy: $(date)"

# 推送到 Gitee Pages 分支
echo "🔄 推送到 Gitee..."
git push -f https://gitee.com/你的用户名/cursor-ppt.git gh-pages

echo "✅ 部署完成！"
echo "📱 请手动到 Gitee 仓库中点击 Pages 服务的'更新'按钮" 