// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const numeros = [2,3,4,5,6,7,8];


const promedio = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    suma = suma / array.length;

    return console.log (`El promedio de: ${array} es: ${suma}`)
}

promedio (numeros);

// se debe de hacer con reduce y join

// Practica reduce 

const palabras = ['Hola', 'mundo', 'lindo'];

const frase = palabras.reduce((acumulador, valorActual) => {
  return acumulador + ' ' + valorActual; // Concatenamos palabras con un espacio
}, '');

console.log(frase); // Salida: " Hola mundo lindo"


// mas o menos entiendo