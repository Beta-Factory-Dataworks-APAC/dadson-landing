#!/bin/bash

# Dadson Website Setup Script
# This script helps new developers set up the project environment

echo "========================================="
echo "🏠 Dadson Website Setup"
echo "========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or later and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or later is required. You have Node.js $NODE_VERSION."
    exit 1
fi

echo "✅ Node.js version $(node -v) is installed."

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm and try again."
    exit 1
fi

echo "✅ npm version $(npm -v) is installed."

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies. Please check the error message above."
    exit 1
fi

echo "✅ Dependencies installed successfully."

# Create .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
    echo ""
    echo "🔧 Creating .env.local file..."
    echo "NEXT_PUBLIC_BASE_URL=http://localhost:3000" > .env.local
    echo "✅ .env.local file created."
fi

# Run development server
echo ""
echo "🚀 Starting development server..."
echo "📝 You can access the website at http://localhost:3000"
echo ""
echo "========================================="
echo "Setup complete! Happy coding! 🎉"
echo "========================================="

npm run dev 