FROM node:16 as build

WORKDIR /user/src/app
COPY . ./
RUN npm install -g @angular/cli@13.3.3
RUN npm install
RUN ls -alh
RUN ng build
RUN mkdir /app && cp -r dist/afirix /app/

FROM nginx:1.21
COPY --from=build /app /usr/share/nginx/html