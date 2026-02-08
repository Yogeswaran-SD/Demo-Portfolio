@echo off
title Portfolio Server
cd /d "%~dp0server"
echo ================================
echo Starting Backend Server...
echo ================================
echo Server will run on: http://localhost:5000
echo.
call npm run dev
