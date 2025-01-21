
/*
25) Programa una función que dado un arreglo de elementos,
 elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
  devolverá ["x", 10, 2, "10", true].
*/

const eleminarDuplicados = (arr = []) => {
    if (!arr instanceof Array) return console.warn("El valor ingresado no es un arreglo");
    if (arr.length === 0 ) return console.warn ("el Array esta vacio");
    if (arr.length > 2) return console.warn("El array debe tener al menos 2 elementos");
    
}
