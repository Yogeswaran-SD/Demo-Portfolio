@echo off
title Portfolio Client
cd /d "%~dp0client"
echo ================================
echo Starting Frontend Client...
echo ================================
echo Client will run on: http://localhost:3000
echo.
call npm run dev
