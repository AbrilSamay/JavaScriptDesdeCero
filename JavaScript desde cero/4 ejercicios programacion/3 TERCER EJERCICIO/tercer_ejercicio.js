
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