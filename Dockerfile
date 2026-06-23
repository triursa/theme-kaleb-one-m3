FROM node:26-alpine AS build
WORKDIR /theme
COPY package.json ./
RUN npm install
COPY scripts/ scripts/
COPY src/ src/
RUN npm run build

FROM nginx:alpine
COPY --from=build /theme/dist/ /usr/share/nginx/theme/dist/
COPY showcase/ /usr/share/nginx/theme/showcase/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]