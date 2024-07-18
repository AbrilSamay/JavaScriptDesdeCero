import saludar, {array} from "./constantes.js";
import {methods} from "./methods.js";

/*
Module
------

Significa o sirven para mandar a llamar mas archivos javascript no solo desde 
el HTML si no que desde el mismo archivo javascritp interno puedes mandar a 
llamar a otro. 

Como invocar?
/////////////

Si el creador de una libreria te indica colocar la invocacion del archivo js en html 
en la parte de la cabezera hazlo, de lo contrario esto es un error, se debe de colocar 
al final antes de que la etiqueta body haga cierre.

es importante agregar al final de invocar el codigo js la etiqueta type con el 
valor "module"  type : "module"

si de casualidad quieres agregar soporte a navegadores viejos solo tienes que 
agregar una etiqueta al final con el valor "nomodule"


ORDENAMIENTO DE CODIGO
----------------------

1- importacion de modules
2- declaracion de variables 
3- declaracion de funciones
4- ejecucion de codigo


Como mandar a llamar archivos js desde js ?
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


1/ crear los archivos necesarios 
2/ colocar export en el archivo que vamos a enviar
3/ Colocal "import {} from " en el archivo donde llamaremos 
4/ Colocar la carpeta en donde esta en el from "./Carpeta"
5/ coloca ./ al inicio del from, ./ significa buscar 

*/

console.log (array, methods.sumar(3,4))
saludar() // se agrega automaticamente y se ejecuta solo :)

/*
Si tu necesitas que algo se ejecute despues de haberse creado, o necesitas 
que algo se cargue prioritariamente puedes utlizar default despues de la exportacion 
indicando que de esa manera se priorize esa exportacion 

export default function pan (){
console.log ('hola')}


importante, no se pueden mandar por default una funcion expresada, solo funciones declaradas 
esto pasa por en la maner en la que funcionan las funciones en javascript, con una funcion 
declarada se puede hacer perfertamente por el hoisting de javascript, entonces a la hora de 
enviar ya esta cargada y con su valor asignado.
Pero esto no pasa con las funciones expresadas o con las variables y constantes 
aqui un ejemplo:
*/

// export default const random = 1;      NOOOOO!

/*
Esto no se puede hacer ya que al momento de crear una importacion por default, esta sera 
lo primero en cargar, por ende se estara enviando antes de que esta tenga siquiera un 
valor asignado y nos marcara error.

La manera correcta a continuacion:

*/


let random2 = 34; export default random2; 

 
/*
En resumen las funciones expresadas, variables y constantes se tienen que exportar 
una ves estas ya han cargado, para evitar todos los errores.

algo que tambien se puede hacer con los modules is agregar nicknames a las variables 
y funciones que exportamos 

aqui un ejemplo:
*/

//NO EXPORTAR ABAJO, SOLO EL POR EL EJEMPLO 

import { constante as loquequieras} from "./constantes.js";

console.log (loquequieras)

// agregamos la exportacion y agregamos 'as' y la redefinimos a nuestro gusto 
// bastante similar a lo que encontramos en reacte
// hasta aca la clase de los modulos.