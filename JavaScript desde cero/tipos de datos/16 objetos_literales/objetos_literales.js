console.log ('hola que tal provando')

// Objetos literales


/**
  No es mas que una nueva manerade asignar atributos y metodos a 
  los objetos de una menera mas simple. 

  Antes los atributos y metodos se asignaban de esta manera:

 */

  let nombre = 'kenia', 
  edad = 7;


  const perro = {
    nombre: nombre, // se asigna el valor de nombre a la key nombre
    edad: edad,    // se le asigna el valor de la variable edad a la key edad. 
    ladrar: function (){
        console.log ('guauu guauu') // a la llave ladrar se le asigna una funcion 
    }
  }

  // Ahora la nueva manera de poder hacer esto es esta:

  const dog = {
    nombre,  // automaticamente JavaScript interpreta que a la llave nombre -
            //  se le asignara la variable con el mismo valor 

    edad, // de igual manera con edad, se le asigna el valor de la variable edad .

    raza: 'callejero', // no hay problema con asignar nuevos valores.

    ladrar (){  // JavaScript automaticamente entiende que a la key 'ladrar' se le asignara una funcion. 
               //  no hay necesidad de especificar que le asignaremos una funcion. 
        console.log ('perrito dice guauuu')
    }
  }

console.log ( perro, dog.ladrar (), dog)