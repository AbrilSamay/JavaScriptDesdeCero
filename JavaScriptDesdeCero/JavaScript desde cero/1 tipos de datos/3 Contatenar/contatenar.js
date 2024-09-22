/*
Que es contatenar?
Es unir informacion 
esto se logra de una manera muy sencilla 
 */

let nombre = "alex";
let apellido = "Romana";

/*CONTATENAMIENTO*/

let saludar = "Hola me llamo " + nombre + " " + apellido
console.log (saludar)

/*Esto suele ser muy cansado, pero tambien podems hacer usa de la "interpolacion" y "Template String" 

Para interpolar se usa la comilla invertida y esta no sirve para sumar numeros   ````````*/

let saludo2 = `Hola mi nombre es ${nombre} ${apellido} y me gusta el pan`
console.log (saludo2)

/*Ademas la interpolacion sirve para imprimir codigo, sin que este salga en una sola linea o deformado. EJEMPLO */


let ul2 = 
`<ul>
    <li> hola <li>
    <li> pan <li>
<ul>`

console.log (ul2)


let pan = "pan"
let leche = "leche"
let azucar = "azucar"

let interpolacion = ` ${pan} con ${leche} con un poquito de ${azucar}`
console.log (interpolacion)