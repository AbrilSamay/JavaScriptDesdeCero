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
