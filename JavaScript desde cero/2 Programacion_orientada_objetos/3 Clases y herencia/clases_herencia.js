// Clases y herencia.  .

/*
 Que nunca se olvide que JavaScript funciona con prototipos aunque parezca una clase no es mas que 
 azucar de sintaxis, pero internamente JavaSript pasa todo a prototipos sin que nos demos cuenta.

 Las clases no resiven parametros como tal, si deseas recibir parametros necesitas utilizar el method
 'constructor'

 He aqui un ejemplo:

 */

 class Animal {
    constructor (nombre, genero, raza){  // constructor recibe los parametros.
        this.nombre = nombre;
        this.genero = genero;
        this.raza = raza;
    }

    saludar (){
        console.log (`hola soy ${this.nombre} soy de la raza ${this.raza} y soy genero: ${this.genero}`)
        return this.ladrar ()
    }

    ladrar (){
        console.log ('guauu guaaau guaaau  guaau')
        return 0
    }   

    // Con las clases puedes dejar los metodos dentro, no tendras problemas de memoria por metodos duplicados.

 }



 const panfilo = new Animal ('panfilo','heterosexual','aguacatero'), sofia = new Animal ('sofia','lesbiana','gato');


 console.log (panfilo.saludar(), sofia.saludar())  
 /*
 y a todo esto como se la da la herencia en las clases ? 
 Con la palabra reservada 'extends' que hace referencia a se extiende de

 ademas del metodo super () el cual manda a llamar el costructor de la clase padre.
 */

class Perro extends Animal {
    constructor (nombre,genero, raza, tamanio){
        super (nombre,genero, raza)
        this.tamanio = tamanio;
    }

    saludar (){
        console.log ('esto esta siendo sobre escrito del original')
    }
}

const holaquetal = new Perro ('Yonkagor', 'Asexual', 'gatoPerro','mediano');

console.log ( holaquetal, holaquetal.saludar())

/*
De nunca olvidar que javascript no esta basado en clases si no que en prototipos . 
*/




















//  class NombreUsuario {
//     constructor (nombre,password,correo){
//         this.nombre = nombre;
//         this.password = password;
//         this.correo = correo; 
//     }

//     saludo (){
//         console.log (`hola que tal como estas ${this.nombre}, tu password es ${this.password}, y tu correo es ${this.correo}`)
//     }
//  }

//  const omar = new NombreUsuario ('omar','********','monopeludo@gmail.com');

//  console.log (omar.saludo())








