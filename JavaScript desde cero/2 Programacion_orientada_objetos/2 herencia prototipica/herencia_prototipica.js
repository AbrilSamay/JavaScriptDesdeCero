//Herencia prototipica



// atributos asignados:
function Animal (nombre, genero){
    this.nombre = nombre;
    this.genero = genero;

}

// prototipo asignado fuera de la funcion:

Animal.prototype.saludar = function () {
    console.log (`hola me llamo ${this.nombre}`)
}

Animal.prototype.migenero = function(){
    console.log (`mi genero es: ${this.genero}`)
    
}


let carlos = new Animal ('carlos'), 
Maria = new Animal ('maria'),
carlosSaluda = new Animal ('hombre','hombre')


console.log (carlos.saludar(),Maria.saludar(),carlosSaluda.migenero())

// Herencia en accion. 


function Perro (nombre, genero, raza){
// crear variable que cuelgue del this de la funcion 

this.super = Animal;
this.super (nombre, genero)
this.raza = raza;

}

// Perro esta herendando de animal. 
Perro.prototype = new Animal ();
Perro.prototype.constructor = Perro;


/*
Cuando una clase hija hereda de una clase madre puede usar todos los metodos que esta tiene
incluso puede sobreescribir esos metodos de la clase de la cual proviene
*/

// sobre escritura 

Perro.prototype.saludar = function (){
    console.log ('soy un perrito bonito bien pero bien bonito, esto esta siendo sobre escrito, ya no es como venia en el metodo del padre en la funcion constructa perro esto es cambiando. ')
}

Perro.prototype.ladrar = function(){
    console.log ('guaau guauu',this.nombre,this.genero,this.raza,'aparentemente aaaaaaaaaaaaaaaaaaa')
    
}

const sofia = new Perro ('sofia','lesbica','aguacatera');
console.log (sofia.saludar())
 

// REPASO DE HERENCIA PROTOTIPICA 


// 1. Definimos la función constructora Animal
function Animal(nombre) {
    this.nombre = nombre;
  }
  
  // 2. Agregamos un método al prototipo de Animal
  Animal.prototype.hablar = function() {
    console.log(this.nombre + " hace un sonido.");
  };
  
  // 3. Creamos una instancia de Animal
  let perro = new Animal("Firulais");
  
  // 4. Usamos el método 'hablar'
  // Aunque 'perro' no tiene el método 'hablar' en sí mismo, lo encuentra en Animal.prototype.
  perro.hablar();  // Imprime: "Firulais hace un sonido."
  

