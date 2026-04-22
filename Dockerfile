# Stage 1: Build Astro static site
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

# Override GitHub Pages config for production deployment
ENV ASTRO_SITE=https://methasense.de
RUN sed -i "s|const base = '/methasense-website';|const base = '';|" astro.config.mjs && \
    sed -i "s|const site = 'https://ykhedar.github.io';|const site = 'https://methasense.de';|" astro.config.mjs && \
    npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=builder /app/dist /var/www/html/methasense

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
