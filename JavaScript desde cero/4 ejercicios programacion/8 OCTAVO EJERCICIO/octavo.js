// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.



let test = prompt ('ingrese el texto en el que se buscara').trim(), 
input = prompt ('ingrese el texto que desea eliminar');

const replaceFunction = (test,input) => {
    if (!test || !input) return alert ('no has ingresado correctamente los datos');
    alert (`El texto resurtante es: ${test.replaceAll(input,'')} `);
};

replaceFunction (test,input);

// complete ^-^