FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*
# Copy built Angular app
COPY --from=build /app/dist/doc-link/ /usr/share/nginx/html/
# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Add debugging info
RUN echo "Files in /usr/share/nginx/html:" && ls -la /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]