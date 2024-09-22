/*
2) Programa una función que te devuelva el texto recortado según el 
número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/



let expRegInputValue =  /[^a-zA-Z\s0-9,]/; // special characters 
let inputValue = prompt ('ingrese el texto a cortar ');
let inputValueTrim = inputValue.trim();
let expRegInputValueResult = expRegInputValue.test (inputValue)
let numeroCaracteres = inputValueTrim.length;
let expRegInputNumberValue = /[^0-9]/; // numbers only

if (!inputValue) {
    alert ('ingresa un valor');
    location.reload();
} else {
    if (expRegInputValueResult) {
        console.log ('El texto ingresado no es valido');
        alert('El texto ingresado no es valido');
        location.reload();
    } else {
        let contiueOrStop = confirm (`el texto ingresado es "${inputValueTrim}" deseas cortarlo?`);
        if (!contiueOrStop) {
            alert('operacion cancelada')
        } else {
            while (true){
               let cut = prompt ('Numero de caracteres a cortar'); 
               let cutTrim = cut.trim()
               let cutResultExpReg = expRegInputNumberValue.test (cutTrim);
               console.log (cutTrim)
               if (cutResultExpReg || !cutTrim){
                   alert('ingresa un numero');
                   continue;
               } else {
                console.log ('se esta ejecutando esto ?')
                   function cortarCaracteres (cutTrim){
                       let result = inputValueTrim.substring (0, cutTrim);
                       alert (`el resultado es: ${result}`);
                    } 
                    cortarCaracteres (cutTrim);
                    break;
               };
           };
        };
    };
};

