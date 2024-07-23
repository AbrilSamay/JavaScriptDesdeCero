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

console.log (cortarCaracteres('Hola Mundo',4));


