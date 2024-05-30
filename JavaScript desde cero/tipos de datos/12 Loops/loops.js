//Loops, o ciclos en JavaScript


console.log ('testing ')

let contador = 7;


//Con  while, primero se evaluraa la condicion relacional ante de ejecutar el codigo.

while (contador < 10){
    console.log ('while '+contador)
    contador++;
}

// Con do while primero se ejecuta el codigo y despues evalua la condicion 
// es decir no importa si la condicion no se cumple el codigo se ejecutara siempre una vez 



  do{
    console.log('Do while '+ contador)
    contador ++;
 }while (contador < 10)

  // Tanto como while y do while han quedadon en el pasado, ahora en dia lo que se usa es for y sus variantes.


 let array = [10,20,30,40];



  for (let index = 0; index < array.length; index++) {
    console.log(array[index])
    
  }