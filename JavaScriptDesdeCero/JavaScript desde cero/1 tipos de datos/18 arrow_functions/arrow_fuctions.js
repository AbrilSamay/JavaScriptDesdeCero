
// Arrow Funtions 

/*
 Son una implementacion que vino a mejorar la manera en que se ecribe el codigo
 para asi poderlo llevar a una manera mas expresiva y facil de entender. 

 Es una nueva forma de definir funciones anonimas, que sean expresadas.

 importante recordar que una funcion expresada se genera cuando 
 a una variable se le asigna. el valor de una funcion anonima.


 Una arrow function no es mas que  agregar un parentesis y un mayor que despues de los 
 parametros a recivir. 
 */


 const saludar = nombre => console.log (`Hola como le va ${nombre}`);
saludar("alex")


// se puede omitir los parentesis y brackets cuando sea un solo parametro a recivir y una sola linea de codigo.

// const sumar = (a,b, ...c) => {
//    let result = a + b;

//    c.forEach(element => {
//     result += element,
//     console.log (josue)
//    });

//    return result

// }

const sumar = (a,b, ...c) => {
    let result = a + b;
  let josue = 'josue'
    c.forEach(function(element) {
     result += element,
     console.log (josue)
    });
 
    return result
 
 }
 

console.log (sumar(1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4))


let alex = 'alex'

const hola = function (){
    console.log ('como estas', alex)
}

const Hola = () => console.log ('como estas', alex)

hola ();
Hola ();