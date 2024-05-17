/* tipos de operadores en JavaScript  */


// TENEMOS PRINCICALMENTE LOS OPERADORES ARITMETICOS 

/*
+ mas, - menos, * multiplicacion, / divicion, % modulo, () signos de agrupacion.
*/

// JAVASCRIPT RESTEPA LOS EL ORDEN DE LOS SIGNOS, LEY DE LOS SIGNOS 

let a = 5 + (5-10)*3;
console.log (a)

let modulo = 5 % 2; // Esto nos da el residuo de una multiplicacion 
let diivcion = 5 / 2 // Nos da el resultado de una divicion 
console.log (`Este es el resultado de la vicicion 5/2 ${diivcion}
Este es el residuo de la divicon 5/2 #${modulo}`)


//  OPERADORES RELACIONALES 

/*
> Mayor que, < Menor que, >= mayor o igual, <= menos o igual, == comparacion, === comparacion a fondo.
*/

console.log(`ocho mayor que nueve ${8>9}, 
nueve mayor que ocho, ${9>8}, ocho mayor o igual que nueve 8>=9 ${8>=9}, 
siete mayor que siete: 7>7: ${7>7}
`)

/*El numero de iguales que usamos es importante porque: */

// = 1 un igual sirve para asignacion 
let asignacion = " le estooy asignando este valor a la variable a"
console.log (` 1 solo igual '=' sirve para asignar un valor ${asignacion}`)

// == 2 Dos iguales sirver para comparar datos pero no de manera especifica. "
console.log (` Dos iguales sirve para comparar datos pero no de manera especifica '7' (string) es igual a 7 ( numero )${ "7" == 7},
nos arroja true, por que son la misma cosa, pero no son el mismo tipo de dato. Esto es una mala practia, ya que nos puede dar errores.`)

// === 3 signos de igual sirven para hacer una comparacion pero mas a fondo. 
console.log (`Tres iguales es la manera reconmendada de comparar datos, ya que este va vas a fondo y especifica el tipo de dato, si un dato es igual pero 
no ese el mismo tipo de dato nos dara false 
'7' (string) es igual a 7 ( numero ): ${ "7" === 7}
7 (numero) es igual a 7 (numero):${7 === 7}
`)


/*
Operadores de incremento y decremento
*/

// Sirven para incrementar o disminuir el valor.

let incrementacion = 1;
let suma = 2

incrementacion = incrementacion + 2; // esta es una manera de hacerlo 
console.log (`El primer valor de incrementacion: ${incrementacion}`)

suma += 3; // Hace lo miso que el anterior, suma 3 a 1 
console.log (suma, 'valor de segundo metodo incrementacion')



// Operador Unario

// Es el que se utiliza para subar solo una unidad 
let i = 1;
i ++; 
console.log (i, ' este es el valor de i, ++ solo suma uno')

let h = 1; 
h--; 
console.log (h, 'este el valor de h, solo resta uno ')



//OPERADORES LOGICOS 

/*
Sirven para comparar varios datos al mismo tiempo, algunos de ellos son: !Not, || Or, && And
 */


// !Not: lo que es verdadero lo vuelve a falso y viceversa 

console.log ( `Ejemplo de !Not, 9 es igual a 9 ? ${!9===9}, nos dara falso, aunque este sea verdadero`)
console.log ( `Ejemplo de !Not, 9 es igual a 8 ? ${!9===8}, nos dara verdadero, aunque sea falso`)


// || Or: Si tengo una o mas condiciones y una de esta se cumple, basta para que este operador logico me devuelva true

console.log ('es 9 igual a 9 y 2 igual a 8 ', (9===9)||(9==="9"))
console.log (' si una condicion se cumple nos dara un valor verdadero, no importa si tenemos 100 y solo una es verdadera')


// && And: Este funciona de manera inversa, solo si todas las condiciones son verdaderas nos dara true

console.log ('&& and, solo si todo se cumple nos dara true')
console.log ('es 7 igual a 7, 8 igual a 8, 9 igual a 9 y 2 igual a 2', ((7===7)&&(8===8)&&(7==="7")),`no importa si una no se cumple, o todo o nada.` )

console.log ('es 7 igual a 7, 6 igual a 6 y 5 igual a 5', ((7===7)&&(6===6)&&(5===5)),`nos tiene que dar true, 
ya que todas son verdaderas`)

// Eso es todo por hoy 