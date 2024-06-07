//DESTRUCTURACION 

const numeros = [1,2,3];

// sin destructuracion 
let uno = numeros [0];
let dos = numeros [1];
let tres = numeros [2];

console.log ( uno, dos , tres);

// Con destructing  

const [one, two, three, four, five, six] = numeros;
console.log (one,two,three,four, five )


const persona = {
    nombre: 'Alex',
    apellido: 'romana',
    edad: 20
}

let {nombre, edad, apellido} = persona
console.log (nombre, apellido, edad)