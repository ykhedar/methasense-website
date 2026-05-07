# Stage 1: Build Astro static site
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=builder /app/dist /var/www/html/methasense

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
