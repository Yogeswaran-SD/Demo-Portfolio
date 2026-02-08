@echo off
echo ================================
echo Portfolio MERN Stack Setup
echo ================================
echo.

echo Installing Server Dependencies...
cd /d "%~dp0server"
call npm install
echo.

echo Installing Client Dependencies...
cd /d "%~dp0client"
call npm install
echo.

echo ================================
echo Setup Complete!
echo ================================
echo.
echo To run the application:
echo.
echo 1. Make sure MongoDB is running
echo 2. Open TWO terminal windows:
echo.
echo    Terminal 1 (Server):
echo    Double-click: start-server.bat
echo.
echo    Terminal 2 (Client):
echo    Double-click: start-client.bat
echo.
echo The app will be available at:
echo - Frontend: http://localhost:3000
echo - Backend:  http://localhost:5000
echo.
pause
