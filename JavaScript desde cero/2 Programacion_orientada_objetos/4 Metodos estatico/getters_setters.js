/**
 En JavaScript no hay clases privdas como en otros lenguajes de programacion 
 que algo sea privado quiere decir que solo se ejecturara 
 dentro del bloque de la clase pero esto NO EXISTE EN JAVASCRIPT 

 En JavaScript todos los metodos son publicos al igual que los atributos.



Que es un static Method ?
Es aquel que se puede ejecutar sin necesidad 
de instanciar a la clase (sin crear una copia).

 */

class Animal {
    constructor (tipo,raza,tamanio,color){
        this.tipo = tipo;
        this.raza = raza;
        this.tamanio = tamanio;
        this.color = color;
    }



    // Este es un metodo Statico 
    static StaticMethod (){
        console.log ('hola me gusta el pan con cafe')
    }
}

Animal.StaticMethod()  // se ejecuta ese method sin necesidad de crear una instancia. 



/**
 Setters and Getters 

 Son methods especiales que nos permiten establecer y obtener los valores de 
 atributos de nuestra clase. 
 Es decir, valores que dejamos en null aproposito podremos establecer su valor 
 mas adelante, dependiendo de nuestras necesidades a la hora 
 */