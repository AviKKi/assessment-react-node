# stage1 as builder
FROM node:14-alpine as builder

COPY package.json ./

RUN npm install && mkdir /react-ui && mv ./node_modules ./react-ui

WORKDIR /react-ui

COPY . .

RUN npm run build

# stage2
FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /react-ui/build /usr/share/nginx/html

EXPOSE 3000 3500

ENTRYPOINT ["nginx", "-g", "daemon off;"]