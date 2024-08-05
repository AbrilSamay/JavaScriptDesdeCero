/* 7) Programa una función que valide si una palabra o frase dada,
 es un palíndromo (que se lee igual en un sentido que en otro),
  pe. mifuncion("Salas") devolverá true. */



  let test1 = prompt ('igresa el texto');
  let upsideDown = test1.split('').reverse().join("");
  console.log (test1,upsideDown)

  let result = function (test1,upsideDown){
    if (test1 == upsideDown) console.log (true);
  };

  result (test1,upsideDown);

  console.log (result)