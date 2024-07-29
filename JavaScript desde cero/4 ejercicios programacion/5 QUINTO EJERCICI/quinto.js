//5) Programa una función que invierta las palabras de una cadena de texto
//, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".


// methos im gonna use 
// split to cut the world 
// reverse (reverses the order of the elements in an array)
// join (join a string together);


let string = 'hola mama';
console.log (`"${string}" input`)
const upsideDown = (string) => {
    let result = string.split ('').reverse ().join ('');
    console.log (`"${result}" output`);
};
upsideDown (string);



let expRegInput = /[^a-zA-Z\s]/; 