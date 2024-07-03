/**
 Objeto Console
 -------------

 Consoele en un objeto informativo de JavaScript el cual nos brinda los errores,
 advertencias, informacion y mucha otra imformacion importante.



 Hay varios metodos para el objeto console, algunos de ellos son:

Error: Nos regresa un error en la consola, personalizado de la manera que gustemos.
Warn: Nos brinda un mensaje de advertencia de color amarillo el cual tambien es personalizable
info: Brinda texto en negrita a manera de informacion. 
log: Nos pasa un regustro de lo que ha pasado en nuestra aplicacion. */

console.error('este es un error personalizado');
console.warn('esta es una advertencia personalizada');
console.info('nos brinda informacion ')
console.log ('nos pasa un registro de lo que paso en el codigo')



/*

En la consola existen ciertons comodines que podemos utilizar a la hora de imprimir
algo de nuestro interes.  

%s : Sirve para cambiarlo por un string 
%d : Sirve para poder cambiarlo por un digit 

 */
const nombre = 'juan', edad = 45;
console.log (`hola que tal soy %s y tengo %d`, nombre,edad ) // los porcentajes son reemplazados por las variables

// Tambien podemos limpiar la consola con console.clear

// console.clear ( )

// de igual manera podemos mandar a imprimir el documento javascript en la consola.

console.log (document) // depende del navegador 

/* Pero si lo necesitamos de manera objeto como en javascript (con las llaves triangulares ),
podemos utilizar console.dir para que sea de esa manera. */

console.dir (document)