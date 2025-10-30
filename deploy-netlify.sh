#!/bin/bash

# FTRX Soft Solutions - Netlify Deployment Script
# This script helps build and deploy your website to Netlify

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}FTRX Netlify Deployment Script${NC}"
echo -e "${BLUE}================================${NC}"
echo ""

# Function to print colored messages
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version must be 18 or higher. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed."
    exit 1
fi

print_success "npm version: $(npm -v)"

# Check if netlify-cli is installed
if ! command -v netlify &> /dev/null; then
    print_info "Netlify CLI is not installed."
    read -p "Do you want to install it? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_info "Installing Netlify CLI..."
        npm install -g netlify-cli
        print_success "Netlify CLI installed successfully"
    else
        print_error "Netlify CLI is required for deployment. Exiting."
        exit 1
    fi
else
    print_success "Netlify CLI is installed"
fi

# Clean previous build
print_info "Cleaning previous build..."
rm -rf dist node_modules/.cache
print_success "Clean complete"

# Install dependencies
print_info "Installing dependencies..."
npm install
print_success "Dependencies installed"

# Build the project
print_info "Building project..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build completed successfully"
else
    print_error "Build failed. Please check the errors above."
    exit 1
fi

# Check if build output exists
if [ ! -d "dist/my-website/browser" ]; then
    print_error "Build output directory not found: dist/my-website/browser"
    exit 1
fi

print_success "Build output verified"

# Ask deployment type
echo ""
echo -e "${YELLOW}Choose deployment option:${NC}"
echo "1) Deploy to production"
echo "2) Deploy as draft (preview)"
echo "3) Just build (skip deployment)"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        print_info "Deploying to production..."
        netlify deploy --prod
        print_success "Production deployment complete!"
        echo ""
        print_info "Opening site in browser..."
        netlify open:site
        ;;
    2)
        print_info "Deploying as draft..."
        netlify deploy
        print_success "Draft deployment complete!"
        echo ""
        print_info "Check the preview URL above"
        ;;
    3)
        print_info "Build complete. Skipping deployment."
        print_info "Build output is in: dist/my-website/browser"
        ;;
    *)
        print_error "Invalid choice. Exiting."
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}Deployment script completed!${NC}"
echo -e "${GREEN}================================${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Test your live site"
echo "2. Submit sitemap to Google Search Console"
echo "3. Test with PageSpeed Insights"
echo "4. Configure custom domain (if needed)"
echo ""
