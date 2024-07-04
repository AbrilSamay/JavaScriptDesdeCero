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

//console.dir (document)


// Tambien se pueden mostrar las cosas a manera de tabla con .table:

console.table (Object.entries(console).sort());

/*
Para colocar un array un una tabla so usa .table 
a su vez funciona con objects y otras cosas en javascritp
*/

const numeros = [1,2,3,4,5], vocales = ["a",'e','i','o','u'];
 console.table (numeros); console.table (vocales)
 console.log ('funcionan a la perfeccion');

 // Tambien se puede medir cuanto tiempo tarda tu codigo en ejecutarse 
  // abrimos el bloque de codigo con console.time 

  console.time ("uno")

  const arreglo  = Array (10000000);

  for (let index = 0; index < arreglo.length; index++) {
    arreglo [index] = index;
    
  }
// lo comento para ahorrar memoria ,,,, console.log (arreglo)
  console.timeEnd ("uno");

  // En ocaciones se puede necesitar saber cuantas veces se ha ejecutado un bloque de codigo. para eso contamos con console.count

  // Console.count; 


  for (let index2 = 0; index2 < 100; index2 ++) {
    console.count('codigo ejectutandose')
    console.log (index2)
    
  }

  // Tambien podemos hacer pruebas con el metodo .assert 

  let x = 2, y = 3, pruebaXY = 'se espera que x sea menor que y'


                        //variables a manera de objeto. 
  console.assert(x < y, {x,y,pruebaXY})
        //primero la condicion 

// Si hay un error saltara un error a la consola de manera personalizada. 