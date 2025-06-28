@echo off
chcp 65001 >nul

echo 🚀 开始构建和部署到 Gitee Pages...

REM 构建项目
echo 📦 构建项目...
call npm run build

REM 进入构建目录
cd dist

REM 检查是否存在 .git 目录
if not exist .git (
    echo 🔧 初始化 git 仓库...
    git init
    git checkout -b gh-pages
)

REM 添加所有文件
echo 📝 添加文件...
git add -A
git commit -m "deploy: %date% %time%"

REM 推送到 Gitee Pages 分支
echo 🔄 推送到 Gitee...
git push -f https://gitee.com/你的用户名/cursor-ppt.git gh-pages

echo ✅ 部署完成！
echo 📱 请手动到 Gitee 仓库中点击 Pages 服务的'更新'按钮
pause 