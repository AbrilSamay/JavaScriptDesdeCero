// Introduccion a la programacion orientada a objetos. 

/**
 JavaScript es un lenguaje multiparadigma es decir, que podemos utilizar diferentes paradigmas, 
 como la programacion funcional o la programacion orientada a objetos.


 Programacion Orientada a Objetos. 

 Dentro de la POo hay 4 conceptos muy importantes que debemos de entender. 



Clases 
------

un modlo a seguir, algo que nos sirve como modelo a seguir para que de eso basarnos 
y poder generar instancias (objeto creado a partir de una clase)


objeto
------
Es una instancia (objeto creado apartir de una clase) de una clase 
Una copia de ese modelo, el cual estamos utilizanod en el mundo real  (una copia de una idea).


Atributos 
---------
es una caracteristica o propiedad del objeto (son variables dentro de un objeto)




Metodo 
------

Son las acciones que un metodo puede realizar (Son funciones dentro de un objeto)



Prototipo
---------

Es un mecanismo por el cual un objeto puede heredar atributos y metodos de un 
objeto padre,





*/

//Crear objetos copiando y pegando, no es una manera viable de poder crear nuestro codigo.


const animal = {
    nombre: "perrito",
    ruido (){
        console.log ('hola soy un perrito')
    }
}

const animal2 = {
    nombre: "Gatito",
    ruido (){
        console.log ('hola soy un gatito')
    }
}

//Supongamos que necesitamos crear 200 animales, haciendolo de esta menera tomara mucho tiempo


// Funcion constructora 
// es un prototipo que nos servira para poder crear otras funciones sin estar copiando y pegando.


function Animal (nombre, genero, edad){

    // atributos 
    this.nombre = nombre;
    this.genero = genero;
    this.edad = edad;

    // Metodos 
    this.saludar = function (){
        console.log (`hola me llamo ${nombre} y tengo ${edad} years `)
        return edad;
    }

    this.presentacion = function (){
        console.log (`soy genero ${genero}`)
        return genero;
    }
}

const pancho = new Animal ('Pancho','porron', 14),
sofia = new Animal ('sofia', 'pato lesbiana',9),
hermenejildo = new Animal ('hermenejildo', ' bien gei', 50);


console.log (pancho.saludar(),pancho.presentacion(), sofia.presentacion(),sofia.saludar(),hermenejildo.saludar(),hermenejildo.presentacion());


// ahora si se dan cuenta, cada objeto tiene asignada dos funciones y esto a la mayar escala sera una gran 
//perdida de memoria, para eso utilizamos los prototipos, asignaresmos a la clase animal, un prototipo base
// asi todo objeto que se llame animal o cualquier otro nombre ya tendra este metodo.


function Personas (Nombre,Edad, Estatura){
    // atributos 

    this.Nombre = Nombre;
    this.Edad = Edad;
    this.estatura = Estatura;
}

//asignamos el prototipo por fuera de la funcion.


Personas.prototype.saludo = function (){
    console.log (`hola que tal me llamo ${this.Nombre}`)
    return 'saludo ejecutandose'

}

Personas.prototype.miEdad = function (){
    console.log ( `tengo ${this.Edad}`)
    return true;
}

Personas.prototype.miEsatura = function(){
    console.log ( `mido ${this.estatura} cm`)
}

let Carlos = new Personas ('Carlos',99,1.4),
panfila = new Personas ('panfila', 88, 2.00),
Lenin = new Personas ("lenin",2,7.00)


console.log (Carlos.saludo(),Carlos.miEdad())


// eso seria todo por esta ocacion, hola que tal 
