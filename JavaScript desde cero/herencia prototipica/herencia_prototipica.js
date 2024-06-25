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
