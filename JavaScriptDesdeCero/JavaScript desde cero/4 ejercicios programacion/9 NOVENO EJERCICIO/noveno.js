
//  9) Programa una función que obtenga 
//  un numero aleatorio entre 501 y 600

let inputMin = prompt ('igrese el valor minimo'), inputMax = prompt ('ingrese el valor maximo');
inputMin = Number(inputMin), inputMax = (Number(inputMax))

function random  (inputMin,inputMax) {
    if (!inputMax || !inputMin) return (alert ('ingresa Numeros!!!'));
    let valor = (Math.random () * (inputMax - inputMin ) + inputMin);
    let result = Math.round(valor);
    return console.log (valor,result), alert (`El numero al azar es: ${result}`)

} 
random (inputMin,inputMax);

// DONE



