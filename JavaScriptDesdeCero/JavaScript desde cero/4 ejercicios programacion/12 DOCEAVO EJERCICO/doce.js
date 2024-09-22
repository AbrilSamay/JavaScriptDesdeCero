
// 12) Programa una función que determine si un 
// número es primo (aquel que solo es divisible por 
// sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


import { numbersFT } from "../modulos exportar/modules.js";

let input = numbersFT.nm (prompt ('Saber si un numero es primo'));

console.time ('How long does my code take to execute?')
const primoNum = (input) => {
    if (isNaN (input)|| input < 2) return console.error ('No has ingresado un valor correcto');
    if (!isFinite(input)) return alert ('no te pases tampoco valores infinitos xD')
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input%i === 0) {
            alert (`El numero ${input} NO ES UN NUMERO PRIMO FALSE`);
            return
        };
    };
    alert (`si es ${input} si es primo true`)
    return ;
};

(primoNum(input));

console.timeEnd('How long does my code take to execute?')

// COMPLETE