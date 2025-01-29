// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const numeros = [3,2,1,1,9,8];


const promedio = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    suma = suma / array.length;

    return console.log (`El promedio de: ${array} es: ${suma}`)
}

promedio (numeros);

const promedioWithReduce = (array) => {
  array.reduce ((suma , currentValue, index) => {
    suma += currentValue
    if (array.length !== (index + 1)) {
      return suma 
    } else {
      console.log (`Array ingresado: ${array} \nLargo del array: ${array.length} \nSumar elementos del array: ${suma} \n la division seria: ${suma}/${array.length} \n PROMEDIO: ${Math.round(suma/array.length)}`)
    }
  });

  
}

promedioWithReduce (numeros); // testing