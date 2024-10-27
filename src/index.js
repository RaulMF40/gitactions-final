// importamos la aplicacion, utilizando el framework express desde el archivo app.js. Establecemos un PORT con el nº 3000 y escuchando en todas las direcciones IP disponibles (0.0.0.0), y cuando este funcionando imprimirá el mensaje que el servidor está corriendo en el puerto que le hemos designado
const app = require('./app')

const PORT = process.env.PORT || 3000;

// Aqui puse para que se pudiera escuchar en 0.0.0.0:3000, ya que en el deploy de prueba me salto una advertencia en la terminal que es la siguiente, cuando hice el despligue a flyio: Watch your deployment at https://fly.io/apps/gitactions-final/monitoring WARNING The app is not listening on the expected address and will not be reachable by fly-proxy.hine 2867492fe74d48 [app] update finished: success You can fix this by configuring your app to listen on the following addresses: - 0.0.0.0:3000 Found these processes inside the machine with open listening sockets: PROCESS        | ADDRESSES  ----------------*-------------------------------------- /.fly/hallpass | [fdaa:a:444a:a7b:48:f557:76ca:2]:22 Creating a second machine to increase service availability Finished launching new machines ------- NOTE: The machines for [app] have services with 'auto_stop_machines = "stop"' that will be stopped when idling ------- Checking DNS configuration for gitactions-final.fly.dev Visit your newly deployed app at https://gitactions-final.fly.dev/
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ---- ${PORT}`)
})