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