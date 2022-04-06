FROM node:12-slim as build

WORKDIR /user/src/app
COPY . ./
RUN npm install -g @angular/cli@12
RUN ls -alh
RUN ng build --prod
RUN mkdir /app && cp -r dist/afirix /app/

FROM nginx:1.21
COPY --from=build /app /usr/share/nginx/html
