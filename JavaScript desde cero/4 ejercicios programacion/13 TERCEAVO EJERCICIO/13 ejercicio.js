
// 13) Programa una función que determine 
// si un número es par o impar, pe. miFuncion(29) devolverá Impar.

import { numbersFT } from "../modulos exportar/modules.js";
let input = numbersFT.nm (prompt('Ingresa un numero para saber si es par o impar').trim());
const parFt = (input) => {
    if (isNaN (input)) { alert ('No has ingresado un valor valido') 
        return;
    }
    if (input % 2 === 0) { 
        alert (`El numero "${input}" es par TRUE`)
        return;
    } else { 
        alert (`El numero "${input} NO ES PAR FALSE"`);
        return;
    }
}

parFt (input);