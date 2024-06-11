/**
 Parametros Rest y Operador Spread

 Que son ?
 Son una form ade virtualmente ir agregando parametros infinitos, ya sea a una funcion 
 o dentro de una variable. 
 Ejemplo con un array el cual no sabemos cuantos parametros recivira

 sirve para indicar parametros infinitos
 */

 function sumar (a , b , ...c){  //a y b son los parametros que sabemos que resivira, y ..c son los que no sabemos (parametro rest)
    let resultado = a + b; // suma los parametros 


    c.forEach((n) => resultado += n)
 
    // funcion foreach recive una funcion que resivira un parametro "n", cada parametro de c lo sumara al 
    // resultado.

    c.forEach(function(element){
        resultado += element;
    })


    return resultado;
 }


 console.log (sumar(1,2,3,4)) // no importa cuantos parametros reciva, siempre funcionara 


 const array = ['a','b','c'];


 array.forEach(function (element){
    console.log ('elemento ' + element);
 })



 /*
  Spread Operator 
  ---------------


  Nos permite exypandir una eprecion para poder guardar multiples elementos. 

  En gerenal nos sirve para mezclar los elementos de un array 

  Vamos a supones que tenemos dos arrays y queremos mezclar sus elementos:
  */

  const arr1 = [1,2,3,4,5],
        arr2 = [6,7,8,9,0];

    // Si quisieramos unir ambos arrays en uno solo podriamos pensar en algo como esto:

    console.log (arr1 + arr2,'hola este es el array', ' un desastre como puedes ver ');

    // Pero esto lo unico que creara es un array con 2 arrays en su interior, o un completo desastre.
    // Para hacerlo de manera correcta usamos los Spread Operators, que no son mas que agregar 3 puntos suspensivos 

    let array3 = [...arr1, ...arr2]
    console.log (array3, 'mucho mejor y mas ordenado')