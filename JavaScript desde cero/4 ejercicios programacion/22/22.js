/*

22) Programa una función que dado 
un array devuelva el número mas alto
 y el más bajo de dicho array,
  pe. miFuncion([1, 4, 5, 99, -60])
   devolverá [99, -60]

*/



const arrayMaxMin = (input) => { 

    // validaciones 
    if (input === undefined) return console.warn ("no ingresaste ningun valor ");
    if (!(input instanceof Array )) return console.error ("el valor ingresado no es un array")
    if (input.length === 0) return console.erro ("el arreglo esta vacio");
    for (const num of input) {
        if (typeof num !== "number") return console.error (`El valor ${num} NO ES UN NUMERO`);
        };

    return console.info (`Arreglo original: ${input} \n Valor mayor ${Math.max(...input)} \n Valor menor ${Math.min (...input)}`);
    
}

arrayMaxMin ([2,9,6,7,8,8,7]);