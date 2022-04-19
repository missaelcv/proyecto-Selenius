# proyecto-Selenius
proyecto-Selenius



## Pasos para realizar tests con Selenium y mocha

### 1- Descargar e instalar nodejs (descargarlo desde: https://nodejs.org/en/ )

### 2- Ejecutar los comandos `node -v` y `npm -v` para verificar que `node` y `npm` estan instalados correctamente.

### 3- Crear una carpeta para que funcione como base del proyecto de prueba:
`mkdir PruebasSelenium`

### 4- Abrir la carpeta recien creada
`cd PruebasSelenium`

### 5- Ejecutar el comando `npm init` para crear el archivo `package.json` que va a almacenar la informacion de las 
dependencias. Al final terminaremos con un archivo que tendra una estructura parecida a la siguiente:

```
{
  "name": "pruebasselenium",
  "version": "1.0.0",
  "description": "Proyecto de Prueba de Selenium",
  "main": "index.js",
  "scripts": {
    "test": "mocha pruebaSuma"
  },
  "author": "Juan Perez",
  "license": "MIT"
}
```

###6- Instalar selenium-webdriver `npm install selenium-webdriver`

### 7- Descargar e instalar ChromeDriver(para Chrome) desde `http://chromedriver.storage.googleapis.com/index.html?path=99.0.4844.51/` y/o GeckoDriver (para Firefox) y colocarlos en la variable PATH

### 8- Instalar mocha `npm install --save-dev mocha` y colocarlo en la variable PATH

### 9- Copiar los archivos `pruebaSuma.js` y `suma.html` en la carpeta del proyecto (cambie la ruta que liveServer le provea)

### 10- EJECUTAR LAS PRUEBAS con: `npm test` lo que internamente va a ejecutar `mocha pruebaSuma.js"

