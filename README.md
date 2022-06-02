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

