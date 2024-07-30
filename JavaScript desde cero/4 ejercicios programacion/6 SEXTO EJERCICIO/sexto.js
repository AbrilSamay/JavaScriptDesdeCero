/* 6) Programa una función para contar el número de veces 
que se repite una palabra en un texto largo
, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */
const texto = ('un monton de texto que esta saliendo presuere cualquier cosa pan pan panpan')
const input = prompt ('palabra clave');

let test = texto.indexOf (input);
console.log (test)

const comprobar = (texto, input) => {
    if (!texto) return console.warn ('no hay nada que buscar');
    if (!input) return console.warn ('no ingresaste una palabra clave');
    
    valor = 0;
    contador = 0;
    while (valor !== -1){
        valor = texto.indexOf (input,valor);
        if (valor !== -1) {
            contador++;
            console.log (contador)
        }
        console.log (input,contador)
    }
return console.info (contador)
}

comprobar (texto,input) 