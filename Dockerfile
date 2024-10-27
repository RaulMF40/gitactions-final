# hacemos este Archivo de Dockerfile, para crear una imagen, instalamos las dependencias y copiando los archivos necesarios, ejecuta las pruebas y tests, y exponemos el puerto 3000 para que el programa sea accesible e inicie la aplicacion que queremos. 

FROM node:22.9.0-alpine

WORKDIR /opt/

COPY package.json /opt/

RUN npm install

COPY . .

RUN npm test

EXPOSE 3000

CMD ["npm", "run", "start"]