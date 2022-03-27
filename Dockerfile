FROM node:lts-alpine
ENV PORT 8080
RUN mkdir /app
WORKDIR /app
COPY package.json .
COPY . .
RUN npm install
