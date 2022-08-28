FROM node:16 as buildStage
WORKDIR /app
COPY package.json /app
RUN npm install --force
COPY . ./
RUN npm run build

FROM nginx
COPY --from=buildStage /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
