#!/bin/bash
set -e

echo "🚀 Starting deployment script..."

# --- CONFIGURATION ---
PROJECT_ROOT="/home/ec2-user/myapp"
NODE_MODULES="$PROJECT_ROOT/node_modules"
LOCKFILE="$PROJECT_ROOT/package-lock.json"
CERT_PATH="/etc/letsencrypt/live/ftrxsoftsolutions.in/fullchain.pem"
APP_NAME="angular-ssr"
APP_FILE="$PROJECT_ROOT/dist/my-website/server/main.server.mjs"
LAST_LOCKFILE_HASH_FILE="$PROJECT_ROOT/.last_lockfile_hash"
LAST_APP_HASH_FILE="$PROJECT_ROOT/.last_app_hash"
DOMAIN="ftrxsoftsolutions.in"
EMAIL="mallikarjunareddyk74@gmail.com"
NGINX_CONF="/etc/nginx/conf.d/angular.conf"

# --- FUNCTIONS ---
install_nodejs() {
  if ! command -v node >/dev/null || ! node -v | grep -q "v22"; then
    echo "Installing Node.js 22..."
    curl -fsSL https://rpm.nodesource.com/setup_22.x | sudo bash -
    sudo yum install -y nodejs
  else
    echo "Node.js 22 already installed."
  fi
}

install_pm2() {
  if ! command -v pm2 >/dev/null; then
    echo "Installing PM2 globally..."
    sudo npm install -g pm2
  else
    echo "PM2 already installed."
  fi
}

install_certbot() {
  if ! command -v certbot >/dev/null; then
    echo "Installing Certbot..."
    sudo yum install -y certbot python3-certbot-nginx
  else
    echo "Certbot already installed."
  fi
}

# --- MAIN ---
echo "📦 Updating system packages..."
sudo yum update -y

# Install dependencies
install_nodejs
install_pm2
install_certbot

# Clean npm cache
echo "🧹 Cleaning npm cache..."
npm cache clean --force

# Install node_modules if needed
if [ ! -d "$NODE_MODULES" ]; then
  echo "📦 Installing node_modules..."
  npm install
else
  echo "🔍 Checking for dependency changes..."
  CURRENT_HASH=$(sha256sum "$LOCKFILE" | awk '{print $1}')
  if [ ! -f "$LAST_LOCKFILE_HASH_FILE" ] || [ "$CURRENT_HASH" != "$(cat "$LAST_LOCKFILE_HASH_FILE")" ]; then
    echo "📦 Dependencies changed. Reinstalling..."
    npm install
    echo "$CURRENT_HASH" > "$LAST_LOCKFILE_HASH_FILE"
  else
    echo "✅ No dependency changes."
  fi
fi

# Build Angular SSR
echo "🏗 Building Angular SSR app..."
npm run build:ssr

# Configure Nginx
echo "⚙️ Configuring Nginx..."
sudo tee "$NGINX_CONF" > /dev/null <<EOL
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    location /robots.txt {
        root $PROJECT_ROOT/dist/my-website/browser;
    }

    location /sitemap.xml {
        root $PROJECT_ROOT/dist/my-website/browser;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
EOL

# Reload Nginx
echo "🔄 Testing and reloading Nginx..."
sudo nginx -t
sudo systemctl reload nginx

# Request SSL if missing
if [ ! -f "$CERT_PATH" ]; then
  echo "🔐 Requesting SSL certificate..."
  sudo certbot --nginx --non-interactive --agree-tos -m "$EMAIL" -d "$DOMAIN" -d "www.$DOMAIN"
else
  echo "🔐 SSL already installed."
fi

# Restart PM2 if server bundle changed
echo "🔍 Checking server bundle..."
CURRENT_APP_HASH=$(sha256sum "$APP_FILE" | awk '{print $1}')
if [ ! -f "$LAST_APP_HASH_FILE" ] || [ "$CURRENT_APP_HASH" != "$(cat "$LAST_APP_HASH_FILE")" ]; then
  echo "🚀 Restarting PM2 app..."
  if pm2 list | grep -q "$APP_NAME"; then
    pm2 restart "$APP_NAME"
  else
    pm2 start "$APP_FILE" --name "$APP_NAME" -- -p 4000
  fi
  echo "$CURRENT_APP_HASH" > "$LAST_APP_HASH_FILE"
else
  echo "✅ No server bundle changes."
fi

# Ensure PM2 auto-start
pm2 startup systemd -u $(whoami) --hp $(eval echo ~$(whoami))
pm2 save

echo "✅ Deployment completed!"
