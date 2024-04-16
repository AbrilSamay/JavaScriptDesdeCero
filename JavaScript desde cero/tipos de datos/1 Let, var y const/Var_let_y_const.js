/*
Var let y const
---------------


VAR
---

Usar var es una muy mala practica debido que este mancha 
el ambito global de nuestro codigo, por lo tanto es mejor
idea no utilizarlo 

Ademas que var no respeta ambito de bloque

*/
var varibleGlobal = "Esto aparecera en el ambito global"

var musica = "Rock"
console.log("Variable musica antes de iniciar el bloque:",musica)
//Valor de musica ahora es rock
 {
    var musica = "pop"
    console.log("Variable de musica dentro del bloque:", musica)
 }

console.log ("Variable musica despues del bloque: ", musica)
console.log ( "var no respeta ambito de bloque por ende es una mala practica usarlo")
 
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

const colores = ["blanco","Negro","Azul"]

objeto.correo = "alex@gmail.com";  /*(sirve para agregar algo a un objeto)*/
colores.push ("anaranjado") /*(para agregar un elemento a un array)*/

//En esta clase se hace mencion a lo que son los objetos y los arreglos

//un objeto es un conjunto de llaves con valores dentro 

let estoEsUnObjeto = {
nombre = "alex"
edad = 20
ciudad = "panfilolandea"
}


//Un array en una coleccion de datos. 


