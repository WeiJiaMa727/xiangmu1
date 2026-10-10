@echo off
chcp 65001 >nul
title 小马快跑秋招版邮箱 - 局域网服务
cd /d %~dp0

set "NODE_EXE=C:\Users\小马\.workbuddy\binaries\node\versions\22.22.2-6\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=node"

echo ==============================================
echo   小马快跑秋招版邮箱 · 启动中...
echo.
echo   本机访问:   http://localhost:8800
echo   手机访问:   http://192.168.1.9:8800
echo   （手机需连同一个 Wi-Fi）
echo.
echo   保持此窗口开着，关闭窗口即停止服务
echo ==============================================
echo.

set HOST=0.0.0.0
"%NODE_EXE%" --max-old-space-size=192 server/index.mjs

pause
