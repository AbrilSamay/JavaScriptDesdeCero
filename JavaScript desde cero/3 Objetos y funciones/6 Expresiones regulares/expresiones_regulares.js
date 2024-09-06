/*
Un tema muy utilisado en ele desarrollo web y sobre todo en javasript 
En si es buscar cosas o patrones es nuestros valores o codigo. 

Son una secuencia de cararteres que forman un patron de buscqueda
y que es mas usado es mas usado en la validacion de datos como tarjetas 
de credito, para asegurarse de que solo se ingresen numeros en un parametro
o para comprobar fechas.

Todos los lenguajes de programacion tienen que tener esto, ya que sirve para 
la validacion de datos. 

No es necesario memorizarlas todas.

Como se declara ?
existen dos maneras:
 */

//FUNCION CONSTRUCTURA

let expReg = new RegExp ('lorem','ig') /*Lo primero es en si lo que se va a buscar y lo segundo 
son las banderas o tambien conocidas como variaciones, las letras tienen varios significados,
por ejemplo la i significa que ignorara mayusculas y minusculas y pasara de todos modos,
la g significa que buscara mas de un resultado, si lo ejecutamos asi solo encontrara un 
resultado sin importar si existen 300 mas   */

// OTRA MANERA DE EJECUTAR UNA EXPRESION REGULAR.

let expReg1 = /Lorem/ig; //banderas al final 

// esta manera es la mas comun, colocas lo que buscaras en medio de barras y al final coloras las flags.

// existen varias maneras de poder ejecutarles, pero esta vez nos quedaremos con test y exec 

let string = `Lorem ipsum dolor  sit amet. Sed veritatis fugiat ut tempora sequi id tempora Quis et maxime repellendus. Qui error quaerat ut odit quia et ratione ducimus et magnam recusandae a quos aliquam id corporis alias. Et consequatur animi eos libero tenetur nam unde accusamus est velit ducimus et soluta neque et consequatur velit.
Et odio reiciendis 33 culpa consectetur sed quas officia ea iusto neque. Aut aliquid fugiat sed incidunt expedita aut veritatis quisquam aut delectus repellat. Est libero ipsa non nostrum sapiente vel officiis quasi. `


let expRegMethod = /lorem/i;

//Test Method, este nos da un boolean como resultado, si se cumple nos dara true or false.

console.log (expRegMethod.test(string)); // entre parentesis especificas en donde buscar 
console.log (expRegMethod.exec(string)); // exec nos dara una busqueda mas precisa.

/*
ambos metodos son utiles pero, test solo nos dara un boolean (true false)
mientras exec nos brindara informacion mas precisa dentro de un array.
*/

/*
algunas banderas utiles pueden ser:

/d  busca un numero 
[]  busca de un valor a otro 
{}  busca un numero especifico de veces 
 */

let methodBusqueda = /\d/ig; 
console.log (methodBusqueda.test(string));
let methodBusqueda2 = /[0-9]/ig; 
console.log (methodBusqueda2.test (string));
