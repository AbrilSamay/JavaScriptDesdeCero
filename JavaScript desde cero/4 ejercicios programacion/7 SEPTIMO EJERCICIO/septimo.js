// septimo ejercicio

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/


let text = prompt ('ingrese texto en el que se buscara');
let input = prompt ('ingrese texto el cual buscar');

const toSearch = (text,input) => {
    let counter = 0;
    let value = 0;

    while( value !== -1){
        value = text.indexOf(input, value);

        if (value !== -1){
            counter++;
            value++;
        }

    }
    alert (`Se encontraron: "${counter} ${input}" en el texto "${text}"`)
} 

if (!text || !input) {'no se han ingresado algunos valores'} else { toSearch (text,input)};
