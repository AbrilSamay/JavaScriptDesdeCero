/*

21) Programa una función que dado 
un array numérico devuelve otro 
array con los números elevados al cuadrado
, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

*/




const cuadrado = () => {
    let input = prompt('Ingrese los numeros a elevarse al cuadrado separados por coma \n (23,3,4,etc) LETRAS NO PERMITIDAS').trim().split(',');
    let result = [];

    if (!/[0-9,]/.test (input)) {
        alert ('Solo numeros permitidos!');
        return;
    }

    input.forEach(element => {
        let num = parseFloat (element);
        let square = Math.pow (num, 2);
        if ( (square % 1) !== 0) { result.push (square.toFixed(2))} else {result.push (square);}
    });

    alert (`Los elementos: "${input} al cuadrado equivalen a: "${result}"`)
};

cuadrado ()
