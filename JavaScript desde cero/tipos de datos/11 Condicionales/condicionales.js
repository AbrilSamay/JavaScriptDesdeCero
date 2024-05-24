//Condicionales


/*
Hasta el momento hemos estado usando estructuras secueciales ya que se ejecuta una linea despeus de la otra 

- Tambien existen estructuras condicionales dependiendo de la evaluacion de una condicion hacemos ciertas
 acciones u otras

*/


//ESTRUCTURAS CONDICIONALES

//if y else, funcionan de tal manera que si una condicion se cumple se ejecturan ciertas acciones.

let edad = 17;

if (edad > 17){
    console.log ("Eres mayor de edad")
} else {
    console.log ("Eres menor de edad")
}

// Se puede anidar mas de un solo if else if else, dependiendo de nuestras necesidades


/*
Ahora dependiendo de cuantas opciones tengamos sera nuestra logica 
por ejemplo, podemos tener una estructura de control con varias opciones 
y en ese caso podemos usar if else de manera anidada, por ejemplo,  podemos 
crear un mensaje en la consola que nos salude dependiendo de la hora:

0 horas hasta las 5: "Hora de dormir "
5 horas hasta las 12: "buenos dias "
12 horas hasta las 18: "Buenas tardes"
18 horas hasta las 23: "Buenas noches "
el cual se verias de esta manera:

*/


let hora = 23.9;

if (hora < 6){
    console.log ("HORA DE DORMIR")
} else if (hora > 6 && hora < 12){
    console.log("Buenos dias")
} else if (hora > 11 && hora < 18){
    console.log ("Buenas Tardes")
} else if (hora > 17 && hora < 24){
    console.log ("Buenas Noches")
}

console.log ('FUNCIONAAAAAAAAAAA')

// Veamos el funcionamiento!!