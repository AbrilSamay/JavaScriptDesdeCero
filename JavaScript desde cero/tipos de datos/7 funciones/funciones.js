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
    return function funcionRetornada () {
        console.log('esto es rotornado por la segunda funcion retornada desde la primera funcion ')
        return function terceraFuncionRetordada (){
            console.log(`todo esto viene desde la tercera funcicion retornada desde la segunda `)
        }
    }
}