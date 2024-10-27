# gitactions-final
# Configuración de GitHub Actions para CI/CD en Fly.io
- Objetivo: Configurar un flujo de trabajo (GitHub Actions) que ejecute los tests, construya la aplicación y la despliegue en Fly.io automáticamente cuando se haga un commit en la rama deploy-gitactions.

- Descripción del ejercicio:

* En este ejercicio, vas a configurar GitHub Actions para implementar un flujo de integración continua (CI) y despliegue continuo (CD) de una aplicación en Fly.io. La aplicación debe pasar por los siguientes pasos cuando se realice un commit en la rama deploy-gitactions:

1. Ejecución de tests: Antes de desplegar la aplicación, deben ejecutarse los tests para asegurarse de que todo funciona correctamente.
2. Construcción de la aplicación: Si los tests son exitosos, se construirá la aplicación en un contenedor Docker.
3. Despliegue en Fly.io: Tras la construcción, la aplicación debe ser desplegada
automáticamente en Fly.io.