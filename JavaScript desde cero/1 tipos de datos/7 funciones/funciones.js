// La manera mas sencilla de declarar funciones es atraves de funciones declaradas.

// usa la palabra reservada "function" para ser declarada.

function unaFuncionQueDevuelveValor (){
    console.log ("uno");
    // return 19; // Una vez efectuado un return el resto de codigo deja de ejecutarse.
    console.log ("dos")
    console.log ("tres")
    return "Esto es lo que retorna la varible"

}

let valorDeLaFunction = unaFuncionQueDevuelveValor ();

// una fuction puede retornar otra fuctino 

function funcionQueDevuelveFuncion (){
    console.log("esta es la primera funcion, esta no hace nada mas que devolver un texto en la consola")
    return `Este es un texto devuelto desde el return de la funcion`
}

let valorDeFuncion = funcionQueDevuelveFuncion () 
console.log (valorDeFuncion)

// Las funciones declaradas se someten a hoistin, lo que quiere decir que no importa en donde han sido invocadas estas se van a ejecutar de igual manera.
// para evitar esto se usan las funciones expresadas 

const funcionExpresada = function() {
    console.log ("Esto es una funcion expresada, si la ejecutamos antes de declararla esta no funcionara")


}

funcionExpresada ()