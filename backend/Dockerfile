FROM node:20-alpine

# Create app directory
WORKDIR /app

# Create non-root user
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs

# Copy package files first (better layer caching)
COPY package*.json ./

# Install only production deps
RUN npm ci --omit=dev

# Copy app source
COPY . .

# Fix ownership AFTER copying files
RUN chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 3000

CMD ["npm", "start"]

