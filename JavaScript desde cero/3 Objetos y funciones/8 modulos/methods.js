function sumar (a,b){
    return a + b;
}

function restar (c,d){
    return c - d;
}

function multiplicar (a,b){
    return a * b;
}


/*
Para poder poder enviar varias cosas a la vez lo que podemos hacer es reunirlas a todas 
en un solo objeto, siendo ese objeto el que se enviaria.
*/

export let methods = {
    sumar, 
    restar,
    multiplicar
};