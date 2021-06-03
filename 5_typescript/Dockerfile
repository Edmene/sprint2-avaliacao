FROM node:12-alpine
COPY . /node-alura
WORKDIR /node-alura
ENV PORT=3000
RUN rm -rf node_modules/ && npm install && npm run build && rm -rf src/
EXPOSE $PORT
CMD npm start