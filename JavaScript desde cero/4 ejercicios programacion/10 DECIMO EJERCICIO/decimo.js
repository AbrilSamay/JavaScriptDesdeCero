//10) Programa una función que reciba un número y evalúe si es capicúa o no
//(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


let input = prompt ('ingrese el numero aqui').trim ();
input = String (input);

const capicua = (input) => {
    if (!input) return alert ('ingresa un valor');
    let reverse = input.split ('').reverse().join('');
    return (reverse === input)
    ? alert (`"${input}"al reves es "${reverse}" por lo tanto, SI es capicúa TRUE`)
    : alert (`"${input}" al reves es "${reverse}" por lo tanto NO es capicúa FALSE`);
};
capicua (input);

// COMPLETE


