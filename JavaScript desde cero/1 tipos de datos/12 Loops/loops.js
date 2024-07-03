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


 let array = [10,20,30,40,50,60];
index = 0
 let valor = 0

 
 
 // El mejor metodo que se puede usar hoy en dia en el metodo for
 /*
 For cumple mejor las exigencian de do y do while, ya que crea una variable especifica dentro del mismo metodo,
 nos permite comparar dentro del metodo y incrementar y decremenatar.
 */

   for (let index = 0; index < array.length; index++) {
    console.log(array[index])
  }



  const objetoPerron = {
    nombre: 'alex',
    apellido: 'romana',
    edad: 20
  }

  //Existen varios tipos de metodos For, algunos de ellos son:

  /*
  FOR IN 
  ------  
  el for in es un loop que nos permite recorrer o iterar las propiedades de un objeto, 
  se puede decir que es un for especial para los objetos en javascript 
  */


for (const key in objetoPerron) {
  console.log (`key ${key} valor ${objetoPerron[key]}`)
}
  
/**
 lo que hara es que en cada loop 'key' tomara el valor de la referencia en el objeto (keys) 
for in solo te deja recorrer propiedades de un objeto.
fon in es mas para objetos primitivos en javascript

 */


/**
 FOR OF 
 ------
 
  Este metodo permite recorrer todos los elementos de cualquier objeto que 
  sea iterable en javascript

  for of es para arrays, strings, boleans y todo en javascript 

 */

  const cualquierArreglo = [1,2,3,4,5]
  for (const elemento of cualquierArreglo) {
    console.log (elemento)
  }

  let string = 'hola mundo'
   for (const caracter of string) {
    console.log(caracter)
    
   }



   /**
    Ejercicio: Suma de los cuadrados

    Crea un arreglo llamado numeros con algunos números enteros (por ejemplo, [2, 4, 6, 8, 10]).
    Utiliza un bucle for...of para calcular la suma de los cuadrados de cada número en el arreglo.
    Imprime el resultado de la suma.

    */

    // for of 

const numeros = [2,4,6,8,10];
let ingresar = prompt('Suma de numeros al cuadrado, ingresa los numeros separados por coma ","');
let arrayNumeros = ingresar.split (",");


let sumaDeCuadrados = 0;
for (const cuadrados of arrayNumeros) {
  let resultado = (cuadrados * cuadrados)
  sumaDeCuadrados += resultado
  

}
alert (`El resultado de la suma de cuadrados es: ${sumaDeCuadrados}`)



