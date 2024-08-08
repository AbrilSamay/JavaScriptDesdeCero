/* 7) Programa una función que valide si una palabra o frase dada,
 es un palíndromo (que se lee igual en un sentido que en otro),
  pe. mifuncion("Salas") devolverá true. */



  let test1 = prompt ('igresa el texto').trim().toLowerCase();

  const palindromo = (test1 = "") => {
    if (!test1) return alert ('no has ingresado un valor');
      let upsideDown = test1.split('').reverse().join("");

      return (test1 === upsideDown)
      ? alert (`la palabra "${test1}" es palindromo VERDADERO`)
      : alert (`la palabra "${test1}" no se palindromo FALSO`)
  };

  palindromo (test1);

  // complete ^-^si es capicúa