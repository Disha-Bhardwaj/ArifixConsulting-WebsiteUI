FROM node:16 as build

WORKDIR /user/src/app
COPY . ./
RUN npm install
RUN ls -alh
RUN ng build
RUN cat /tmp/ng*/angular-errors.log
RUN mkdir /app && cp -r dist/afirix /app/

FROM nginx:1.21
COPY --from=build /app /usr/share/nginx/html