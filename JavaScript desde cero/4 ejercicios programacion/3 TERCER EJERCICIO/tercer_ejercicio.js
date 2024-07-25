
/*
3) Programa una función que dada una String te devuelva un Array de textos
 separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
 devolverá ['hola', 'que', 'tal'].
*/


while (true) {

let expRegInput = /[^a-zA-Z\s]/;
let input = prompt ('ingresa el texto a dividir por espacios');
let inputTrim = input.trim ();
let inputExpReg = expRegInput.test (inputTrim);

    if (inputExpReg || !input) {
        alert ('ingresa un texto valido');
        continue;
    } else {
        let firstConfim = confirm (`el texto: "${inputTrim}" sera cortado en  ESPACIOS deseas continuar?`);
        if (!firstConfim) {
            alert('operacion cancelada');
        } else {
            let split = inputTrim.split (" ");
            alert (`el texto "${inputTrim}" dividido por espacios resulta ${split} `);
        }
        break;
    }
}


console.log (`3) Programa una función que dada una String te devuelva un Array de textos
 separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
 devolverá ['hola', 'que', 'tal'].`)

const devorArray = function (string,valor){
    let partir = string.split (valor)
    console.log (`el texto ${string} dividido por sus espacios seria: ${partir}`)
    console.log (partir);
};

devorArray ('hola que tal'," ");
// complete 