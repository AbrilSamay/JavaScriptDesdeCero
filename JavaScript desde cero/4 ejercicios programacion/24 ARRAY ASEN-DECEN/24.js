/*
24) Programa una función que dado un arreglo de
 números devuelva un objeto con dos arreglos, 
 el primero tendrá los numeros ordenados en 
 forma ascendente y el segundo de forma 
 descendiente, pe. miFuncion([7, 5,7,8,6])
  devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

*/




let inputArray = prompt ("Ingrese los numeros: \n (solo numeros permitidos)").trim();
let splitten = inputArray.split ("");
console.log (splitten)


function arrayArrange (inputArray = undefined) {
  // Comprobaciones

    if (!inputArray) {return console.warn ("no has ingresado ningun valor")};
    if (isNaN (inputArray)=== true) { alert ("solo numeros permitidos \n  ERROR  ")};
   
    for (let i = 0; i < splitten.length; i++) {
      if (isNaN(splitten[i])) {return console.warn (`El elemento: "${splitten[i]}" no es un numero`)};
    }

    const arrayObject = {
      splitten: splitten,
      asendente: splitten.map ((num) => num).sort((a,b) => a - b), // resultado a y b negativo a sera colocado antes.
      desentente: splitten.map ((num) => num).sort ((a,b) => b - a) // resultado a y b positivo b sera colocado antes.
    }

    alert (`${arrayObject.splitten} \n ${arrayObject.asendente} \n ${arrayObject.desentente}`);
}

arrayArrange (inputArray);

// COMPLETE