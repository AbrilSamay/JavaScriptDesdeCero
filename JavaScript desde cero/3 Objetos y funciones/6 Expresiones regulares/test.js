/*
2) Programa una función que te devuelva el texto recortado según el 
número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

console.log (`2) Programa una función que te devuelva el texto recortado según el 
número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".`)

const cortarCaracteres = function (string,numeroCortar){
    let nuevo = string.substring(0,numeroCortar);
    console.log (`el texto: ${string} se cortara en: ${numeroCortar} quedando: ${nuevo}`);
    return nuevo
}

console.log (cortarCaracteres('Hola Mundo',4))

/*
3) Programa una función que dada una String te devuelva un Array de textos
 separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
 devolverá ['hola', 'que', 'tal'].
*/

console.log (`3) Programa una función que dada una String te devuelva un Array de textos
 separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
 devolverá ['hola', 'que', 'tal'].`)

const devorArray = function (string,valor){
    let partir = string.split (valor)
    console.log (`el texto ${string} dividido por sus espacios seria: ${partir}`)
    console.log (partir);
};

devorArray ('hola que tal'," ");

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