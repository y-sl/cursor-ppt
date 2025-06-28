@echo off
chcp 65001 >nul
echo.
echo 🚀 开始部署到 Gitee Pages...
echo.

REM 构建项目
echo 📦 构建项目（Gitee 版本）...
call npm run build:gitee
if errorlevel 1 (
    echo ❌ 构建失败！
    pause
    exit /b 1
)

REM 进入构建目录
echo 📂 进入构建目录...
cd dist

REM 初始化 git（如果需要）
if not exist .git (
    echo 🔧 初始化 git 仓库...
    git init
    git checkout -b gh-pages
) else (
    echo 🔄 切换到 gh-pages 分支...
    git checkout gh-pages 2>nul || git checkout -b gh-pages
)

REM 添加所有文件
echo 📝 添加文件到 git...
git add -A

REM 提交
echo 💾 提交更改...
git commit -m "deploy: %date% %time%"

REM 推送到 Gitee
echo 🚀 推送到 Gitee Pages...
git push -f https://gitee.com/yuanshuailin/cursor-ppt.git gh-pages

REM 返回项目根目录
cd ..

echo.
echo ✅ 部署完成！
echo.
echo 📋 接下来的步骤：
echo 1. 访问：https://gitee.com/yuanshuailin/cursor-ppt
echo 2. 点击【服务】→【Gitee Pages】
echo 3. 选择分支：gh-pages
echo 4. 点击【启动】或【更新】
echo 5. 等待部署完成，然后访问您的网站！
echo.
pause 