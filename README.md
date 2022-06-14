# introduccionTestingConJS

## Usando Jest para las pruebas

Para instalar jest ejecuta el comando en la carpeta del proyecto:

`npm install --save-dev jest`

Estamos usando "Jest" como herramienta de pruebas.

**Tambien** Se configuro **NPM** para ejecutar las pruebas con el comando `npm run test`.


## Pruebas estaticas con Eslint

Para **instalar**, dentro de la carpeta del proyecto usa el comando: `npm i -D eslint`.

Para **inicializar** eslint usa el comando `npx eslint --init` o `npm init @eslint/config`.


## Correr las pruebas en Jest:

Para correr en general, este proyecto esta configurado para hacerlo con el comando:
`npm run test`

Para correr una prueba en especifico usa el comando:
`npm run test -- nombreDelArchivo.js`


## Coverage report

Nos muestra en un documento index.html las pruebas que hemos hecho y las que nos pueden faltar.

Hay que tener un **equilibrio** porque solo nos dice donde SI y donde NO hemos hecho las pruebas **pero no dice si son realmente necesarias de hacer.**

Para ver el coverage report ejecutal el comando: `npm run test -- --coverage`


## Proyecto API

En la carpeta API, descargamos archivos de configuracion para crear nuestro proyecto de pruebas.

1. Debes crear un archivo llamado .env

2. Debes tener instalado docker en tu ordenador

3. Teniendo esto en la termina, ubicado en la carpeta de API hay que ejecutar el comando: `docker-compose up -d mongo`

4. Verificamos que ya esta corriendo con `docker-compose ps`. Para abajar los servicios usamos el comando: `docker-compose down`.



## Solucionando error de puerto 27017 "already used"

Si la consola te lanza un error como este:

`ERROR: for mongo  Cannot start service mongo: driver failed programming external connectivity on endpoint api_mongo_1 Error starting userland proxy: listen tcp4 0.0.0.0:27017: bind: address already in use ERROR: Encountered errors while bringing up the project`

La solucion esta facil, solo debes ejecutar los siguientes comandos:

(Si no tienes instalado netstat en Ubuntu):

`sudo apt install net-tools   `

Luego corres el siguiente comando:

`sudo lsof -i -Pn | grep 27017`

Y por ultimo corres el siguiente comando:

`sudo kill <process ID> `

(El process Id es el numero a la par “process name” de lo que te devolvio el comando que comienza con lsof), mi caso era el 1242. Ejem:

mongod     1242         mongodb   11u  IPv4
y listo! Luego solo corre el `docker-compose up -d mongo` y deberia funcionar

