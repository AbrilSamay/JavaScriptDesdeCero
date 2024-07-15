/*
Funcion anonima autoejecutable 
-------------------------------

Una funcion anonima auto ejecutable es una funcion en la que se engloba todo el codigo que se 
quiere ejecutar.
Es una manera de que cuando tu archivo carga en el navegador, se ejecuta la programacion que 
esta en ese archivo.
Tambien esta protegido de efectos secundarios que pudiera tener la invocacion de librerias 
de terceros o mismos archivos de tu propiedad. 
Ademas permite cambiar el contexto para que puedas tener variabels con el mismo nombre.

una funcion con nombre es evidentemente una funcion nombrada y una no nombrada no tiene nombre.


*/

(function (){
    let nombre = 'pablo';
    console.log (`hola soy ${nombre} y esta iife no estra en conflcito con la segunda`);
})();  // funcion dentro de parentesis para evitar errores de contexto. 
                    // importane colocar puntos y comas al final 

(function (){
    let nombre = 'juan';
    console.log (`hola soy ${nombre} y esta iife no entra en conflico con la primera`);
})();

// no hay conflictos entre ambas, y si nombre es borrada de una es como que no existiera 