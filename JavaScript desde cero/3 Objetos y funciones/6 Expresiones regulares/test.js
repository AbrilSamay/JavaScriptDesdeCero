


console.log (`4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.`);

let emptyArray = [];
let valorimprimir = 8;
const numeroVeces = function (inputExpReg,valorimprimir){
    console.log ( `el texto ${inputExpReg}, se mandara a la consola ${5} de veces`)



    
    for (let i = 1; i < valorimprimir; i++) { 
        console.log (inputExpReg,i);
        emptyArray.push(inputExpReg);
    }
    console.log (emptyArray,'este es el bueno');    
    alert (emptyArray);
}


numeroVeces('HOLA ',9)