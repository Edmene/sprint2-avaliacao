FROM node:12-alpine
COPY . /node-alura
WORKDIR /node-alura
RUN rm -rf node_modules && npm install
EXPOSE 3000
CMD npm start