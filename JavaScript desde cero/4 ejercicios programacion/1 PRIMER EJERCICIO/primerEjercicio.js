
/*
1 Programa una función que cuente el número de caracteres
 de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
 */

console.log (`1 Programa una función que cuente el número de caracteres
 de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.`)

const contarCaracteres = function (string){
    let total = string.length
    console.log (`el texto:${string} tiene: ${total}`)
    console.log(total)
};
contarCaracteres('me gusta pilin');

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


