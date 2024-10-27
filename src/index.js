// importamos la aplicacion express desde el archivo app.js. Establecemos un PORT con el nº 3000, y cuando este funcionando imprimirá el mensaje que el servidor está corriendo en el puerto que le hemos designado
const app = require('./app')

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ---- ${PORT}`)
})