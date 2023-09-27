/*
Var let y const
---------------


VAR
---

Usar var es una muy mala practica debido que este mancha 
el ambito global de nuestro codigo, por lo tanto es mejor
idea no utilizarlo 

*/
var varibleGlobal = "Esto aparecera en el ambito global"


/*
LET
---

Lo mejor que se puede utilizar es let, declarar tus variables
con let, ya que este tiene nambito reducido el cual no puede
salir de el bloque "{}"

*/
let mejorManeraDeDeclarar = "Siempre trata de usar let"

/*
CONST
-----         

Las constantes como su nombre lo indica, es una manera de declarar valores / variables 
los cuales no van a cambiar durante todo el codigo.
Solo funciona con valores primitivos, -string - numbers - booleans
Si lo hacemos con valores compuestos esto no funcionara. 
*/
const objeto = {
    nombre : "alex", edad : 19
}

const VALORES = ["blanco","Negro","Azul"]

objeto.correo = "alex@gmail.com";  /*(sirve para agregar algo a un objeto)*/
colores.push ("anaranjado") /*(para agregar un elemento a un array)*/


