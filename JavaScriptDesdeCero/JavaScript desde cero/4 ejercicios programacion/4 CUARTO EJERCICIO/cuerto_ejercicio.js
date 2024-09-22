// Cuarto ejercicio 

/*
4) Programa una función que repita un texto X veces,
 pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo
*/


while (true){
    let expRegSpecial = /[^a-zA-Z\s]/;
    let input = prompt ('ingrese el texto a repetir');
    let inputTrim = input.trim ();
    let inputExpReg = expRegSpecial.test (inputTrim);
    console.log (inputExpReg)
    if (inputExpReg || !inputTrim) {
        alert('ingrese un texto valido');
        continue
    } else {
        while (true) {
            let expRegNumber = /[^0-9;]/;
            let toDuplicate = prompt ('ingrese el numero de veces a copiar');
            let toNumber = parseInt (toDuplicate);
            let expRegNumberResult = expRegNumber.test (toNumber);
            if (expRegNumberResult || !toNumber ) {
                alert ('ingrese un valor valido')
                continue;
            } else {
                let confirmValue = confirm (`El texto "${inputTrim}" se copiara ${toNumber} veces deseas continuar?`)
                if (!confirmValue) {
                    alert ('operacion cancelada');
                    break
                } else {
                    let ResultArray = [];
                function toCopy (inputTrim,toNumber){
                    for (let x = 1; x < toNumber; x++) {
                        ResultArray.push (inputTrim);
                    }
                    alert (ResultArray);
                }
                toCopy (inputTrim,toNumber);
                }
                break;
            }
        }break;
    }
};

// complete

