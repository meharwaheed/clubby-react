FROM alpine:latest as builder
COPY . /home/app
WORKDIR /home/app
RUN apk add nodejs npm \
	&& cd /home/app \
	&& npm install --force

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/app/dist /usr/share/nginx/html
CMD ["nginx","-g","daemon off;"]
#CMD ["npm", "start"]

#FROM node:18-alpine3.17 as build
#WORKDIR /app
#COPY . /app
#RUN npm install
#RUN npm run build
#
##FROM ubuntu
##RUN #apt-get update
##RUN #apt-get install nginx -y
#COPY --from=build /app/dist /var/www/html/
#EXPOSE 80
##CMD ["nginx","-g","daemon off;"]