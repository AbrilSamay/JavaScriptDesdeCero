// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const palabras = [2,3,4,5,6,7,8];


const promedio = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    suma = suma / array.length;

    return console.log (`El promedio de: ${array} es: ${suma}`)
}

promedio (palabras);