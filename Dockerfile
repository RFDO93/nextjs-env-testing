# STAGE 1 - Build
FROM node:16-alpine as build-deps
WORKDIR /forus-go
COPY package.json yarn.lock ./
RUN npm install
COPY . ./
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]


# revisar la forma de desplegar modo productivo (multisatage)
# STAGE 2 - Production ready ...
#FROM nginx:alpine
#COPY --from=build-deps /forus-go/out /usr/share/nginx/html
#COPY --from=build-deps /forus-go/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#CMD ["nginx","-g","daemon off;"]
