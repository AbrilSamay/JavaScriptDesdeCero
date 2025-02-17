/*
Asincronia en JavaScript 




Una manera de ejecutar accionose o gfgunciones en Javascript despues de un intervalo "n" de tiempo 
es mediante los temporizadores.

Para eso contamos con:  setTimeout () y  setIntervar()
estas funciones nos permiten ejecutar un bloque de codigo despues de un cierto tiempo.


Estructura basica
-----------------

*/


console.warn ('inico contar 4 segundos desde aca')

setTimeout(() => {
    console.info ("Ejecutando contenido de setTimeout, se ejecuta despues de 4 segundos")
}, 4000);


/*
Para cuando necesitemos hacer una cosa cada x cantidad de tiempo contamos con 
setInterval.

el cual como su nombre lo dice, ejecutara una funcion cada n cantidad de tiempo.

*/


setInterval(() => {
    console.info ("ejecutandose este mensaje cada segundo");
}, 1000);


// ejemplo muy simple de un reloj con set interval

setInterval(() => {
    console.warn (new Date().toLocaleTimeString())
}, 1000);