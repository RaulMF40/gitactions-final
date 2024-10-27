//* creamos un servidor web utilizando Express, definimos la ruta GET /, que nos devuelve un mensaje en formato json y una ruta post que tambien nos devuelve en formato json, y exportamos la aplicación para que pueda ser utilizada en otros modulo en el caso de index.js 
const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World Docker and Fly.io!' })
})

app.post('/echo', (req, res) => {
  const { body } = req
  res.status(200).json(body)
})

module.exports = app