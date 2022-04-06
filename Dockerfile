FROM node:16-slim as build

ENV NODE_ENV=production
COPY . ./
RUN npm install -g @angular/cli
RUN ng build --prod
RUN mkdir app && cp -r dist/afirix /app/

FROM nginx:1.21
COPY --from=build /app /usr/share/nginx/html
