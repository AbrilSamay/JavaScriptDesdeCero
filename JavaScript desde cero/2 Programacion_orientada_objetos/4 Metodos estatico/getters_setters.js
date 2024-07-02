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

    hola (){
        console.log ('hola')
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

 class Animal2 extends Animal {
    super (tipo,raza,tamanio,color){
        this.tipo = tipo;
        this.raza = raza;
        this.tamanio = tamanio;
        this.color = color;
        this.edad = null;

    }

    static message (){
        console.log ('this is a random message')
    }

    get getEdad (){
        let valor = prompt('edad del perro')       // obtiene el valor de edad desde un promt 
        console.log ('la edad del perro es', valor)
        return valor;
    }


    set setEdad (edad){
       this.edad = edad;  // lo que se le pase o se establezca, sera el valor.
    }
 }


 /*
 en javascript no hay clases abstractas
 */



 const spike = new Animal2 ('perro','pitbull','grande','azul')

 console.log (spike.setEdad = (89))
 console.log (spike)