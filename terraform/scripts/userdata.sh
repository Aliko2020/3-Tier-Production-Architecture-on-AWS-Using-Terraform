#!/bin/bash
# Update packages
sudo apt update -y
sudo apt upgrade -y

# Install Git
sudo apt install git -y

# Install Node.js (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Clone your backend repository
cd /home/ubuntu
git clone https://github.com/Aliko2020/three-tier-architecture-aws-.git backend

cd backend/server

# Install all dependencies
npm install

# Create environment file
cat <<EOF > .env
PORT=3000
DB_HOST=${db_endpoint}
DB_NAME=${db_name}
DB_USER=${db_user}
DB_PASS=${db_pass}
EOF

# Install PM2 process manager
sudo npm install -g pm2

# Start backend server using PM2
pm2 start server.js --name backend

# Make PM2 persist through reboots
pm2 startup systemd
pm2 save
systemctl enable pm2-ubuntu
