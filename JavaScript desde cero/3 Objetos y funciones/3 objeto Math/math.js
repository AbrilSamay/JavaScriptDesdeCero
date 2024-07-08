/*
Math Object 
-----------



Math es un objeto estatico es decir tendremos que que invocar al 
prototipo de este objeto. 
Tiene muchos methods bastante utiles como para calcuar seno, coseno, hipotenusa y otros mas 
Tambien tiene los valores de algunos digitos como pi = 3.14159265

*/

console.log (Math.PI)

console.log (Math)// Asi podremos ver todos los metodos y valores de este prototipo.

/*
Como ya he dicho este prototipo contiene varios metodos y valores bastantes utiles a la hora 
de programar, ya sean como para calcular cosenos, valores de pi etc 
Para acceder a estos methods y valores colocamos un punto y el method/valor al cual 
vamos a acceder.
*/

// Math.abs (nos da el valor absoluto de un numero)

console.log (Math.abs(-7.8),'valor absoluto de un numero con Math.abs')

 // Si necesitamos redondear un numero contamos con los siguientes metodos:

 // .ceil  cealing, redondeara hasta el entero superior absoluto( el numero mas alto cercano);

 console.log (Math.ceil(7.2),'7.2 siendo redondeado al entero mayor absoluto') // no importa si esta en lo minimo, lo subira a la maximo.

 // Si necesitamos hacer lo contracio tenemos el method floow a nuestra dispocision.

 console.log (Math.floor(7.9), '7.9 siendo redondeado hasta 7 por el metodoo floor')
 // el method floor llevara nuestro decimal al el numero entero inferior absoluto.

 // Ahora para hacerlo de la manera tradicional utilizamos el metodo round 

 console.log (Math.round(8.8),'8.8 siendo redondeado a 9') // redondea al valor mas cercano.
 console.log (Math.round(8.3),'8.3 siendo redondeado a 8') // redondea al valor mas cercano. 

 
 // Si necesitamos calcular una raiz cuadrada contamos con el method 'sqrt' = Square Root 

 console.log (Math.sqrt(81),'raiz cuadrada de 81, 9') // Calcula la raiz cuadrada de 81 que es 9
 
 
//  A su vez podemos elevar numeros a una potencia con el method power 

console.log (Math.pow(2,5)) // primero colocamos el numero a elevar, para despues colocar el exponente.