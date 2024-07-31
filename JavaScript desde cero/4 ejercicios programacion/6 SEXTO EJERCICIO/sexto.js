/* 6) Programa una función para contar el número de veces 
que se repite una palabra en un texto largo
, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */


let input = prompt ('ingrese texto en el cual buscar ');
let toSearh = prompt ('ingrese palabra a buscar');

const comprobar = (input) => {
    if (!input) return console.log ('no has ingresado un texto valido');
        let test  = 0;
        let counter = 0;
        while (test !== -1 ){
            test = input.indexOf (toSearh, test);
            if (test !== -1) {
                counter++
                test++
                console.log ('ejecutandose')
            }
        }
        console.log  (test,counter,'this is the result')
};

comprobar (input)
