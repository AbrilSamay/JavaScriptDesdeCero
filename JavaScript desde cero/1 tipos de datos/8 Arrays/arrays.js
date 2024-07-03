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

const colores = [];

colores.push = ["rojo", "azul", "verde"] // push agrega elementos al array (siempre lo agrega al ultimo.)
colores.pop = (); // Elimina un elemento del array

