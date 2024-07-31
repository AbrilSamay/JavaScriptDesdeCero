

/* 6) Programa una función para contar el número de veces 
que se repite una palabra en un texto largo
, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */


let input = prompt ('ingrese texto en el que se buscara, caracter a buscar');


const buscardor = (input) => {
    if (!input) return console.log ('no has ingresado ningun valor');
    let valorInput = input.trim().split(',');

    let value = 0;
    let counter = 0;

    while (value !==-1){
        value = valorInput[0].trim().indexOf (valorInput[1].trim(),value);

        if (value !== -1) {
            counter ++;
            value++;
        }
    }

    alert (`en el texto "${valorInput}" se encontraron ${counter} "${valorInput[1].trim()}"`);
}

buscardor (input);

// complete 