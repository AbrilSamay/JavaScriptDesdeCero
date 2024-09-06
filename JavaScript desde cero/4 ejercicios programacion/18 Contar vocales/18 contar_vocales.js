/*

18) Programa una función que dada una cadena de 
texto cuente el número de vocales y consonantes,
 pe. miFuncion("Hola Mundo") devuelva Vocales: 4
 , Consonantes: 5.

*/


function counter () {
    const vocalInput = prompt ('ingresa el texto aqui').trim ();
    let vocalesFound = vocalInput.match (/[aeiou]/ig);
    let consonantesFound = vocalInput.match(/[bcdfghjklmnpqrstvwxyz]/ig);
    console.log (vocalesFound,consonantesFound);

    if (!vocalInput) alert ('Debes ingresar un texto!')
    if (vocalesFound === null) {
        alert (`Se han encontrado ${0} vocales y ${consonantesFound.length} consonantes`);
    }  else if ( consonantesFound === null) {
        alert (`Se han encontrado ${vocalesFound.length} vocales y ${0} consonantes`);
    } else (alert (`Se han encontrado ${vocalesFound.length} vocales y ${consonantesFound.length} consonantes`));
};

counter ();


//COMPLETE