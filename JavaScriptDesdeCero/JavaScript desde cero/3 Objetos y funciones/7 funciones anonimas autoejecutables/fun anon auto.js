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



          // d,w y c reciviendo valor desde los parentesis de afuera;
(function (d,w,c){
    console.log (d); // imprime document
    console.log (w); // imprime window
    c.log ('esto en un console.log ') // c se conviente en una abreviacion de console
})(document,window,console);  // document, windown y console asignando valor a d, w y c respectivamente. 




// hay varias formas de escribir estas funciones anonimas como tales:

// Clasica 
(function (){
    console.log ('vercion clasica');
})(); 

// La crockford (javascript the good parts)
((function (){
    console.log ('versino crockford');
})());

// Unaria 

+ function (){
    console.log ('version Unaria');
}();

// Facebook
!function (){
    console.log ('version facebook');
}();


// esto se hacia usualmente antes de la aparicion de los modulos que se veran en la siguiente clase.