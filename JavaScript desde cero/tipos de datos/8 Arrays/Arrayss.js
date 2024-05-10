/*
Podemos usar const en los arreglos, ya que este no da problama is 
el contenido llegase a cambiar.
*/

// ARREGLOS: []
// Un array no es mas que una coleccion de elementos

const abc = []; // Este es un arreglo vacio. 
console.log (abc)


const b = [1,true,"hola",["a","b","c"]]; // SI un array puede tener otro array en su interior. 

// No pasa nada si guardas un array dentro de otro array 

console.log (b)
console.log ("legth: es el numero de elementos en el array")

const colores = ['hola','elemento'];
colores.push ('verde',"los elementos que gustes",[1,2,3])

colores.push = ['rojo','verde','azul'] // push agrega elementos al array (siempre lo agrega al ultimo.)

//colores.pop = ('rojo') // Elimina un elemento del array
console.log(colores,'colores')
console.log (colores)

const arrayEjemplo = Array(100).fill(true)
console.log(arrayEjemplo,'este es el array que estoy buscando')


colores.forEach(function(el,index){
    console.log(`<li id=${index}>${el}</li>`)
})