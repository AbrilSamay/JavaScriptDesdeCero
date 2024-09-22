

// 11) Programa una función que calcule el factorial de un número
// (El factorial de un entero positivo n, se define como el producto 
// de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

let input = prompt ('ingrese el numero a calcular').trim();
let input2 = input // para la segunda funcion

if (!input) {
    alert ('No lo dejes vacio jksjk');
} else {
    input = Number(input);
    if (Number.isNaN(input)) {
        alert ('Ingresa solo numeros enteros positivos!');
    } else if (input === 0 || input === 1){
        alert ('El resultado es 1');
    } else {
        function factorial(input) {
            let counter = 1;
            for (let i = 1; i <= input; input-- ) {
                counter = counter * input;
            }
            return counter;
        };
        alert (`El resultado factorial de "${input}" es "${factorial(input)}"`);
    }
    
}



///////////////////////////////////////////////////////////////////////////////




if (!input2) {
    console.log  ('ingresa un valor');
} else {
    input2 = Number(input2);

    if (isNaN(input2)) {
        console.log ('solo numeros enteros permitidos');
    } else if (input2 === 0 || input ===1){ 
        console.log ('el resultado es 1')
    } else {
        const factorialBetter = (input2) => {
            let counter2 = 1;
            for (let i2 = input2; i2 > 0; i2-- ) {
                counter2 *= i2;
                console.log (input2,i2,counter2)};
                return counter2;
            };
            console.log (`el resultado es ${factorialBetter(input2)}`)
    }
}



/* for (inicialización; condición; actualización) {
    // Código dentro del bucle
}

Inicialización: Se ejecuta una sola vez, justo al principio del ciclo. Establece el valor inicial de 
la variable de control (por ejemplo, let i = 5;).

Condición: Antes de cada iteración, se evalúa la condición (por ejemplo, i > 1). Si es verdadera, el 
bucle continúa; si es falsa, el bucle se detiene.

Ejecución del Cuerpo del Bucle: Si la condición es verdadera, se ejecuta el código dentro del bucle.

Actualización: Después de ejecutar el cuerpo del bucle, se ejecuta la parte de actualización
(por ejemplo, i--). Este es el punto en el que i se incrementa o decrementa según lo definido.

Repetición: Después de la actualización, el ciclo vuelve al paso 2 (la condición) y se repite e
l proceso hasta que la condición sea falsa.
 */


// COMPLETE
