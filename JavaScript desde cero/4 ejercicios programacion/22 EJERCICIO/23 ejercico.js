
/*
23) Programa una función que dado un array de
 números devuelva un objeto con 2 arreglos en
  el primero almacena los números pares y en
   el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0])
    devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

*/

let input = prompt("Ingrese el array de numeros: \n (solo numeros permitidos)");
let inputSpliten = input.split(","); // The array spliten by comas. 

function arrange (inputSpliten){
let par = [];
let impar = [];

for (let i = 0; i < inputSpliten.length; i++) {
    if ((inputSpliten[i]%2)===0){
        // add to par
        par.push(inputSpliten[i]);
    } else {
        // add to impar 
        impar.push (inputSpliten[i]);
    }
}

console.log (`Los numeros pares son: ${par}`);
console.log (`Los numeros impares son: ${impar}`);
}

arrange (inputSpliten);
 