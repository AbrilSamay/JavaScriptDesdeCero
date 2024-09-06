// 15) Programa una función para convertir números
//   de base binaria a decimal y viceversa,
//   pe. miFuncion(100,2) devolverá 4 base 10

import { numbersFT } from "../modulos exportar/modules.js";
let select = numbersFT.nm (prompt ('Elige una opcion: \n  1: Convertir de decimal a binario \n  2: Convertir de binario a decimal'));

const coverterBtoD =  (input) => { // Binario to decimal
    return parseInt (input,2);
}
const dtoB = (input) => {
    return input.toString (2)
}


const converter = (select) => {
if (!select || !/^[1-2]+$/.test (select) ) return alert ('Debes ingresar una opcion valida');
    if (select === 1 ) {
        let input = numbersFT.nm (prompt('"Decimal a Binario" \n (Solo numeros permitidos)'));
        if (isNaN (input)) {alert ('Solo numeros permitidos'); return 'no se permiten letras o caracteres especiales'}
        alert (`'${input}' en valor decimal equivale a: ${dtoB (input)}`)
        return dtoB(input)
    } else if (select === 2){
        let input = numbersFT.nm (prompt('"Binario a decimal" \n (Solo 0 y 1 permitidos)'));
            if (!input || !/^[0-1]+$/.test (input) || isNaN (input)) { alert ('Solo valores del 0 al 1'); return 'solo valores del 0 al 1'};// solo permitir 0 y 1
        alert (`"${input}" en valor decimal equivale a; "${coverterBtoD(input)}"`)
    }
 };
console.info (converter(select));

// COMPLETE
