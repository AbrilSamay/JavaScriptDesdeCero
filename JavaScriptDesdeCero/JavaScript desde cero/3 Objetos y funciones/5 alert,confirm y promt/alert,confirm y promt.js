/*
alert, confirm y prompt 
-----------------------

La mayoria del tiempo necesitaremos una interaccion con el usuario ya sea texto cualquiera
un valor o cualquier otro tipo de valores necesesarios, para poder adquirir algunos de esos 
valores tenemos algunos methods bastante utiles como ya sea alert, confirm y prompt los 
cuales nos permitiran crear un request al usuario.
*/


// alert('esto es una alerta'); 'creara una alerta con un mensaje hacia el usuario;
// confirm('por favor confirme'); 'creara una confirmacion entre true y false';
// prompt ('ingrese un valor'); 'creara un input en donde el usario podra brindar datos';

// Tenemos que guardar esos valores que el usuario nos brinda a traves de una variable de la siguiente maneraz:

let alert1 = alert('esto es una alerta'); //En si alert no guarda ningun valor :p
let confirm1 = confirm ('esto es una confirmacion'); // Guardara un valor entre TRUE Y False;
let prompt1 = prompt('este es un prompt, sirve para que el usuario ingrese un valor');
// prompt nos permite hacer un request al user para que nos brinde any value;

console.log (alert1);
console.log (confirm1);
console.log (prompt1); // si se cancela nos dara el valor de null 

// y esas son las maneras en que un usuario nos puede brindar datos y valores :)