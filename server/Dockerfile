FROM node:22-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

# Mount secrets during build
RUN --mount=type=secret,id=env_file \
    cp /run/secrets/env_file .env

EXPOSE 3000
CMD ["npm", "start"]