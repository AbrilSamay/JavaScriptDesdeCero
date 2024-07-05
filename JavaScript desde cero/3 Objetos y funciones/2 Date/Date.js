/*
Objeto Date 
-----------

Date es un prototipo muy importante de javascript 

JavaScript tiene varios metedos para poder adquirir la hora en 
javascript, date es el primordial. 

*/

let fecha = new Date ();
console.log (fecha);

// Ejecutandolo de esta manera se lo asignamos a una variable, en donde se guardaran todos los datos. 

console.log (fecha.getDate())// Get date nos da la fecha del dia de hoy.

console.log (fecha.getDay()) 
//Get day nos da el dia de la semana en un array [0,1,2,3,4,5,6] en donde cero es lunes y 6 domingo. 

console.log (fecha.getMonth()) // Nos da el mes en el que estamos. 


console.log (fecha.getFullYear());
// Nos brinda el anio completo, si solo colocamos year nos dara un numeros desde 1900 hasta el anio actual.


//Podemos obtener los segundos, horas y hasta los milisegundos con estos methods en js 
console.log (fecha.getHours());
console.log (fecha.getSeconds());
console.log (fecha.getMilliseconds());

// De igual manera se peude pasar el valor de Date a un string de la siguiente manera:

console.log (fecha.toDateString()); // nos da todo en un string

// Si necesitamos la hora en estado normal o actualizado en cada segundo con:

console.log (fecha.toLocaleDateString());

/**
 La hora estandar tal y como la conocemos tiene el nombre de Time Stand, el cual 
 empieza a contarse desde el primero de enero de 1970, podemos calcular los 
 segundos que han pasado desde ese dia con el metodo now el cual se le asigna al objeto Date.

 */

 console.log (Date.now()); // da los segundos pasados desde el primero de enero de 1970

 // Moment.Js es la mejor libreria para poder trabajar el tiempo en javascript 