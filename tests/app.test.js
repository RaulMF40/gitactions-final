// en este app.test.js hacemos que el codigo realice unas pruebas en una API Express, para dicho test utilizamos la dependencia Supertest, y verificamos que la ruta GET / nos devuelva el mensaje que le hemos puesto "hello World..... " cuando pinchemos el link en flyio y tambien cuando pinchemos el puerto en docker, y que el estado sea el numero 200 que significa que esta OK. 

const request = require('supertest')
const app = require('../src/app')

describe('API Tests', () => {
  it('should return Hello World on GET /', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Hello World Docker and Fly.io!')
  })

  it('should echo back the posted data on POST /echo', async () => {
    const data = { name: 'Test User' }
    const response = await request(app).post('/echo').send(data)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(data)
  })
})