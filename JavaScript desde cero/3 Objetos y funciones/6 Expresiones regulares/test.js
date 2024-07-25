


/*
4) Programa una función que repita un texto X veces,
 pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

console.log (`4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.`);

const numeroVeces = function (string,valor1){
    console.log ( `el texto ${string}, se mandara a la consola ${valor1} de veces`)
    for (let i = 1; i < valor1; i++) { 
        console.log (string,i);
    }
    console.log (string, valor1);
}

numeroVeces('HOLA ',9)