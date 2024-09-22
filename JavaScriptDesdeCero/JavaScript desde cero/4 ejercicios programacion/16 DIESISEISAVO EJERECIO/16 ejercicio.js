/*

16) Programa una función que devuelva el monto 
final después de aplicar un descuento a una 
cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

*/

import { numbersFT } from "../modulos exportar/modules.js";

let input = numbersFT.nm (prompt ("Discount calculator \n Enter the number to apply the discount").trim());
let discount = numbersFT.nm (prompt ('Enter the discount to apply').trim());

const percentage = (input, discount) => {
    if (!input || !discount || isNaN (input) || isNaN (discount)) return alert ('Check the values you provide!');
    if (input < 0 || discount < 0) return alert ('Please enter positive numbers for both, the price and the discount');
    if (discount > input) return alert ('The discount cant be bigger than the actual price');
    let result = ((discount / 100) * input).toFixed (2);
    let finalPrice = (input - result).toFixed (2);
    return alert (`${input} with ${discount} discount applied equals: ${finalPrice}`);
}

(percentage (input,discount));

// Complete