# gitactions-final
# Configuración de GitHub Actions para CI/CD en Fly.io
- Objetivo: Configurar un flujo de trabajo (GitHub Actions) que ejecute los tests, construya la aplicación y la despliegue en Fly.io automáticamente cuando se haga un commit en la rama deploy-gitactions.

- Descripción del ejercicio:

* En este ejercicio, vas a configurar GitHub Actions para implementar un flujo de integración continua (CI) y despliegue continuo (CD) de una aplicación en Fly.io. La aplicación debe pasar por los siguientes pasos cuando se realice un commit en la rama deploy-gitactions:

1. Ejecución de tests: Antes de desplegar la aplicación, deben ejecutarse los tests para asegurarse de que todo funciona correctamente.

   - Ejecutamos un npm test. 

2. Construcción de la aplicación: Si los tests son exitosos, se construirá la aplicación en un contenedor Docker.

   - Creamos la imagen, en este caso la llamaremos de esta manera deploygitactions:1.0.0 .
   - Creamos el contendor, al que llamaramos gitactions-final. La imagen la subimos a nuestro dockerhu
   - los comandos que utilizaremos: 
      * docker build -t deploygitactions:1.0.0 . (para la imagen)
      * """" docker run -d --name gitactions-final -p 3000:3000 deploygitactions:1.0.0 (para ejecutar contendor)
      * docker tag deploygitactions:1.0.0 raulmoya/deploygitactions:1.0.0 (etiquetamos la imagen para subir a dockerhub, verificamos con docker images)
      * docker push raulmoya/deploygitactions:1.0.0 (subimos la imagen a dockerhub)


3. Despliegue en Fly.io: Tras la construcción, la aplicación debe ser desplegada
automáticamente en Fly.io.
    - Iniciamos sesion en Fly.io (ya sea iniciando directamente en la web o a traves de comando flyctl auth login)
    - Creamos un nuevo proyecto de fly.io. con el flyctl launch (seguimos los pasos indicando y lo nombramos: gitactions-final)
    - y desplegamos nuestra aplicacion llamada gitactions-final en flyio, con flyctl deploy

