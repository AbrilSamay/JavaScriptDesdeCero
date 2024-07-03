/*
Como declararlos
----------------
*/

let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6"



/*________________________________________________________________________________________ */

console.log (a + b + "Esta es la suma de la variable a y b")
/*Los numeros no son un tema complicado, pero aqui van algunas cosas que pueden ser utiles*/

console.log(c.toFixed(1) + " Este es el resultado de (toFixed) el cual sirve para quitar los decimales")
/*en el metodo toFixed podemos quitar los decimales si nose es necesario, el numero al final nos sirve
para definir el numero de decimales que queremos mostrar.  */


console.log(c.toFixed(5) + " En este caso mostrariamos 5 decimales")
/*en este caso mostrariamos 5 decimales a la hora de imprimir el numero */


console.log(parseInt(c) + " Este es el resultado de parseInt(redondear)")// Nos sirve para redondear.

console.log(parseFloat(d) + " Resultado de parseFloat (Mantener decimales)")// Nos sirve para mantener los decimales

console.log(typeof c, typeof d + " Resultado de typeof(Saber el tipo de dato)") // Nos sirve para saber el tipo de dato.

console.log(c + parseFloat(d) + " Resultado de parseFloat  ( Pasar texto a numero )") // Pasa texto a numero con decimal.

console.log("Sigue adelante con tus sueños :' ")

