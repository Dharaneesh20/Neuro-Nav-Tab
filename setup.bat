@echo off
echo ============================================
echo  🧠 Neuro-Nav - Quick Setup Script
echo ============================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python is not installed! Please install Python 3.9 or higher.
    pause
    exit /b 1
)

echo ✓ Python found
echo.

REM Create virtual environment if it doesn't exist
if not exist "venv" (
    echo 📦 Creating virtual environment...
    python -m venv venv
    echo ✓ Virtual environment created
) else (
    echo ✓ Virtual environment already exists
)
echo.

REM Activate virtual environment
echo 🔄 Activating virtual environment...
call venv\Scripts\activate

REM Install requirements
echo 📥 Installing dependencies...
pip install -r requirements.txt
echo ✓ Dependencies installed
echo.

REM Check if .env exists
if not exist ".env" (
    echo ⚠️  No .env file found!
    echo 📄 Creating .env from template...
    copy .env.example .env
    echo.
    echo ⚙️  Please edit .env file and add your:
    echo    - SECRET_KEY
    echo    - GOOGLE_CLIENT_ID
    echo    - GOOGLE_CLIENT_SECRET
    echo.
    echo Press any key to open .env file...
    pause >nul
    notepad .env
)

echo.
echo ============================================
echo  🎉 Setup Complete!
echo ============================================
echo.
echo To start the server, run:
echo   python app.py
echo.
echo Server will be available at:
echo   http://localhost:5000
echo.
echo ============================================
pause
