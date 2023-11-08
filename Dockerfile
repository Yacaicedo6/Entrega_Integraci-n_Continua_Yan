# Usamos una imagen base de Node.js
FROM node:14

# Establecemos el directorio de trabajo en /app
WORKDIR /app

# Copiamos los archivos necesarios al directorio de trabajo
COPY package.json package-lock.json server.js /app/

# Instalamos las dependencias
RUN npm install

# Exponemos el puerto 3000 (asegúrate de que no haya conflictos si tu backend utiliza un puerto diferente)
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["node", "server.js"]
