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

# Install Postgresql
sudo apt install postgresql -y

sudo systemctl start postgresql
sudo systemctl enable postgresql
sudo systemctl status postgresql

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
DB_HOST=ecommercedb.csx62e0266by.us-east-1.rds.amazonaws.com
DB_NAME=postgres
DB_USER=amos
DB_PASSWORD=Aliko1234
EOT

# Install PM2 as ubuntu user
sudo npm install -g pm2

# Start backend with PM2
pm2 start index.js --name backend
pm2 save
pm2 startup systemd -u ubuntu --hp /home/ubuntu
EOF
