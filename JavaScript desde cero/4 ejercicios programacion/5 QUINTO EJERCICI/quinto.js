//5) Programa una función que invierta 
//las palabras de una cadena de texto
//, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".


// methos im gonna use 
// split to cut the world 
// reverse (reverses the order of the elements in an array)
// join (join a string together);


let expRegInput = /[^a-zA-Z\s,]/;  // a-z characters 
let input = prompt('ingrese el texto').trim();
let expRegInputResult = expRegInput.test (input);

const upsideDown = (input) => {
    let result = input.split ('').reverse ().join ('');
    console.log (`"${result}" output`);
    alert (`el texto: : "${input}" al reves es: ${result}`)
};

if (expRegInputResult) {
    alert('ingrese un valor valido');
} else {
    upsideDown (input);
};


// Complete
