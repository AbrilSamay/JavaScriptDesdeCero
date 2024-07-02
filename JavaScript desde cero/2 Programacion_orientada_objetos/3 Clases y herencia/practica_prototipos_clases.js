//Practica para saber si he entendido como funciona la herencia en javascript 
 
/*
primero que todo que es una clase en javascript 
Una clase es un modelo a seguir, sera una cadena de codigo que contendra los atributos y metodos de las 
estancias que crearemos a base de esa clase, pero en javascript las clases no son como en otros leguajes 
de programacion como en php por ejemplo, las clases en jvs no son clases como tal ya que en jvs las clases 
funcionan atravez de prototipos, que es parecido a lo que hace una clase, un prototipo en si es el como esta
estructurado un objeto en javascript y el el prototipo mas primitivo en este lenguaje en el prototipo objetct 

he aqui una demostracion de como funcionan los prototipos:

*/



//Funcion prototipica: es una funcion que se creara cada vez que lo necesitemos:


function Animalito (nombre, genero, tipo, tamanio, color){
    this.nombre = nombre;
    this.genero = genero;
    this.tipo = tipo;
    this.tamanio = tamanio;
    this.color = color;
}

Animalito.prototype.saludo = function (){
    console.log (`Nombre del animal: ${this.nombre}
                  Genero: ${this.genero}
                  Tipo de Animal: ${this.tipo}
                  Tamano: ${this.tamanio}
                  Color: ${this.color} `)
}


const Spike = new Animalito ('spike', 'macho', 'perro', ' mediano', 'cafe'), princesa = new Animalito ('princesa', 'hembra','gato ','pequeno','negro');
const ranger = new Animalito ('Ranger', 'macho','perro', 'grande','negro'), kitty = new Animalito ('kitty', 'hembra','gato','pequeno','amarillo con negro')
console.log (Spike.saludo(), princesa.saludo(),Spike,princesa);

// vamos a hacer herencia y a sobre escribir.


function Perros (nombre,genero,tipo,tamanio,color,edad){
    this.super = Animalito;
    this.super (nombre,genero,tipo,tamanio,color);
    this.edad = edad;
}

Perros.prototype.saludoDePerro = function (){
    console.log (`hola soy ${this.nombre}, y tengo ${this.edad} years de edad
                  GUAUUU GUAUU GUAUU GUAUU GUAUU!!!`)
}

Perros.prototype.saludo = function (){
    console.log (`soy ${this.nombre} y estoy sobre escribiendo de la funcion prototipica animales guau`)
}



Perros.prototype.saludoDeGato = function (){
    console.log (`hola soy ${this.nombre}, y tengo ${this.edad} years de edad 
                MIAUU MIAUU MIAUU MIAUU !!`)
}


const spike2 = new Perros ('Spike','macho ','perro','mediaono','cafe','3 meses'), Ranger2 = new Perros ('Ranger','macho','perro','grande ','negro','1 year')

console.log (spike2.saludoDePerro(), Ranger2.saludoDePerro(), spike2.saludo())



//se que puede ser mejor y que puede contener errores, pero es lo que se hasta el momento.



// AHORA LO HARE CON CLASES 

class AnimalClase {
    constructor (Nombre,raza){
        this.NombreAnimal = Nombre;
        this.RazaAnimalClase = raza;
    }                                   // constructor es el que recibe los parametros dentro de una clase
                                        // dentro de este van las asignaciones.

    saludoClase (){
        console.log (this.NombreAnimal,this.RazaAnimalClase,'hola este es  saludoClase ejecutandose')
    }
}

const kennyoung = new AnimalClase ('Kennyoung','perro');
console.log (kennyoung.saludoClase());

// ahora hare la herencia.

class PerrosClase extends AnimalClase {
    constructor (nombre,raza,edad,color){
        super (nombre,raza);
        this.edad = edad;
        this.color = color; 
    }


    ladrar (){
        console.log ('guauuuu guauuuu guauuuuu')
    }
}

const yonka = new PerrosClase ('yonka','perro','6 meses','cafesito tirando al marroncito');

console.log ( yonka)