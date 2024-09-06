/*

19) Programa una función que valide que un 
texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.

*/


const verify = () => {
    let input = prompt (`Ingresa un nombre para verificar su veracidad \n (tildes y ñ permitidos )`).trim();
    if (/[^a-z,é,á,í,ó,ú,ñ]/gim.test (input)) {alert (`El nombre: ${input} no es valido.`)
    } else { alert (`El nombre ${input} es un nombre valido`)}
}

verify ()

// COMPLETE