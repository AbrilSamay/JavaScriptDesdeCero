/*

20) Programa una función que valide
 que un texto sea un email válido,
  pe. miFuncion("jonmircha@gmail.com") 
  devolverá verdadero.

 */


  function emailPattern () {
    let input = prompt (`Ingresa el correo a verificar`).trim ();
    if (/^[a-zA-Z0-9._-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test (input)) {alert (`"${input}" es un correo valido `)} else (alert ('El correo es invalido'));
  }

  emailPattern ();

  // COMP