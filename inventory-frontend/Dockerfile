### STAGE 1: Build ###
# FROM node:10-alpine3.9 AS build
# WORKDIR /usr/src/app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# ### STAGE 2: Run ###
# FROM nginx:1.17.1-alpine
# COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html

FROM node:10-alpine3.9 as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=node /usr/src/app/dist/inventory-frontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf