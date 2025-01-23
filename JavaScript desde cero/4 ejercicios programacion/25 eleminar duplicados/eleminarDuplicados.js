
/*
25) Programa una función que dado un arreglo de elementos,
 elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
  devolverá ["x", 10, 2, "10", true].
*/

let input = [1,2,3,4,5,5]; // input donde se buscara.


const duplicadosBuscar = (input) => {
  const filtered = input.filter ((callBack,index,self) => self.indexOf (callBack) !== index);
  return (console.log (`Array original: ${input} \nArray filtrado: ${filtered}`));
} 


console.log (duplicadosBuscar(input));

// DONE 