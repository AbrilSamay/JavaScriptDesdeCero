console.log (`1 Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.`)

/*
1 Programa una función que cuente el cuantos caracteres tiene un texto,
 pe. miFuncion("Hola Mundo") devolverá 10.
 tienes que asegurarte de siempre resivir el tipo de dato correcto
 */


 let stringA = prompt ('ingrese el texto')
 let expRegString = /[^a-zA-Z\s,]/; // si tiene un caracter especial;
 let expRegStringResult = expRegString.test(stringA);


 const isNullOrEmpty = function (stringA){
    return !stringA || stringA === "";
 }
 if (isNullOrEmpty(stringA)) {
    alert ('Ingresa un texto');
    location.reload();
 } else {
    if (expRegStringResult) {
        alert('No se permiten caracteres especiales!');
        location.reload();
    } else {
       let confirmValue =confirm(`El texto ingresado es "${stringA}" deseas continuar ?`);
       if (!confirmValue) {
        alert('entendido')
       } else {
        const pruebax = function (){
            let total = stringA.length;
            console.log (total);
            console.log (`el texto "${stringA}" tiene ${total} caracteres`);
            alert(`el texto "${stringA}" tiene ${total} caracteres`);
         };
         pruebax ();
       }
    };
    
 };
