/*

22) Programa una función que dado 
un array devuelva el número mas alto
 y el más bajo de dicho array,
  pe. miFuncion([1, 4, 5, 99, -60])
   devolverá [99, -60]

*/


function higer() {
    const input = prompt('Ingrese el listado de números separados por una coma \n (Ej: 2,34,-4,4). LETRAS NO PERMITIDAS').trim();

    // Verificar si no ingresaron nada
    if (!input) {
        alert('No has ingresado un valor');
        return;
    }

    const inputArray = input.split(',');

    // Verificar si no es un array o contiene solo valores vacíos
    if (!Array.isArray(inputArray) || inputArray.length === 0) {
        alert('El valor ingresado no es un array válido');
        return;
    }

    // Convertir cada elemento del array en un número y validar
    const numbers = inputArray.map(element => element.trim());

    for (let element of numbers) {
        if (isNaN(element) || element === "") {
            alert(`${element} no es un número válido`);
            return;
        }
    }
    
    // Convertir los elementos válidos en números
    const parsedNumbers = numbers.map(Number);

    const max = Math.max(...parsedNumbers);
    const min = Math.min(...parsedNumbers);
    
    console.log(`En el array ingresado: "${input}"\nEl número de mayor valor es: ${max}\nEl número de menor valor es: ${min}`);
}

higer();

//