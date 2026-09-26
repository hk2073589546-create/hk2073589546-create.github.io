@echo off
setlocal
cd /d "%~dp0"
if not exist node_modules\next (
  echo Install dependencies with npm install first.
  pause
  exit /b 1
)
echo Open http://localhost:3100 after Ready appears. Press Ctrl+C to stop.
call npm run dev
pause
