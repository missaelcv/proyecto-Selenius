const webdriver = require('selenium-webdriver');
const assert = require("assert").strict;
const {Builder, By, Key, until} = webdriver;
const chrome = require('selenium-webdriver/chrome');
let options = new chrome.Options();
let driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

async function prueba() {
   describe('Pruebas de integracion', async function() {
      it('debe actualizar el resultado al presionar el boton sumar', async function(){
         this.timeout(10000);
         await driver.get('http://127.0.0.1:5500/suma.html');//colocar aqui la ruta que liveServer provea

         let campo1 = await driver.findElement( By.id('primerNumero') );
         let campo2 = await driver.findElement( By.id('segundoNumero') );
         let botonSumar = await driver.findElement( By.id('botonSumar') );
         let contenedorResultado = await driver.findElement( By.id('resultado') );
         
         await campo1.sendKeys('23');
         await campo2.sendKeys('75');
         await botonSumar.click();
         let resultado = await contenedorResultado.getText();
         assert.equal("98", resultado );
         await driver.sleep(1000);
         await driver.quit();
      });
   });
}

prueba();