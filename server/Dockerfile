FROM node:22-alpine
WORKDIR /app

ARG PORT=3000

COPY package*.json ./
RUN npm ci --only=production

COPY . .

# Mount secrets during build
RUN --mount=type=secret,id=env_file \
    cp /run/secrets/env_file .env

EXPOSE ${PORT}
CMD ["npm", "start"]