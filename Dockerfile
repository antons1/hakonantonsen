FROM node:lts as build

WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN ["npm", "install"]
COPY ./static /app/static
COPY ./src /app/src
COPY ./blog /app/blog
COPY ./*.js ./*.json /app/
RUN ["npm", "run", "build"]

FROM nginx:1.20-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/public /app
EXPOSE 80 443
