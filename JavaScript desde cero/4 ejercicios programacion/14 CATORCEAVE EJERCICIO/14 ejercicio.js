// 
// 14) Programa una función para convertir grados Celsius 
// a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F

let input = prompt(`Convertidor de grados Fahrenheit a Celsius y viceversa \n (ingresa una temperatura 32F o 32C)`).trim();

const converter  = (input) => {
    let amount = input.replace (/[a-z]/ig, '').trim()
    let type = input.replace(/[0-9]/g, '').trim(); // Extrae el tipo de grado
    if (!amount) {alert ('NO HAS INGRESADO UNA CANTIDAD');
        return;
    }
    if (!type) {
        alert ('NO HAS INGRESADO EL TIPO DE GRADOS');
        return;
    }

    amount = parseFloat (amount); // Aseguracion de que sea un numero
    if (isNaN (amount)) return 'La cantidad ingresada no es valida'
    if (!/[CF]/i.test (type)) return 'El tipo de grado debe ser "C" o "F"';

    if (type.toUpperCase() === "C"){
        let result = (amount * 9/5) + 32;
        alert (`${amount} Grados Celsius equivalen a "${result}" grados Fahrenheit`)
        return ;

    } else if (type.toUpperCase() === "F"){
        let result = (amount - 32) * 5/9
        alert (`${amount} Grados Celsius equivalen a "${result}" grados Fahrenheit`)
        return;

    } else {
        return 'Parece que hay errores en los datos que ingresaste'
    }
   };

console.log (converter (input));

// Complete 