#!/bin/bash
set -e

# Update system
apt update -y
apt upgrade -y

# Install curl & git
apt install -y curl git

# Install Node.js 18 LTS (or 20 LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs npm

# Verify
node -v
npm -v

# Clone repo
cd /home/ubuntu
git clone https://github.com/Aliko2020/3-Tier-Production-Architecture-on-AWS-Using-Terraform.git backend

# Fix permissions
chown -R ubuntu:ubuntu /home/ubuntu/backend

# Run app as ubuntu user
sudo -u ubuntu bash <<EOF
cd /home/ubuntu/backend/backend

# Install dependencies
npm install

# Create environment file (variables will expand)
cat <<EOT > .env
PORT=3000
DB_HOST=$db_endpoint
DB_NAME=$db_name
DB_USER=$db_user
DB_PASS=$db_pass
EOT

# Install PM2 as ubuntu user
sudo npm install -g pm2

# Start backend with PM2
pm2 start server.js --name backend
pm2 save
pm2 startup systemd -u ubuntu --hp /home/ubuntu
EOF
