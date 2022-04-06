FROM node:17-slim as build

WORKDIR /user/src/app
ENV NODE_ENV=production
RUN ng build --prod
RUN cp -r dist/afirix /app/

FROM nginx:1.21
COPY --from=build /app /usr/share/nginx/html
