/*
Operador Cortocircuito
----------------------

Funcionan colocando 2 condiciones ya sea colocando el operador logico or || 
o ya sea colocando el operador && and 

Cortocircuito con OR||:
Cuando el valor de la izquierda en la expresion siempre puede validar a TRUE
es el valor que se cargara por defecto. 

 */

function saludar (nombre){
    nombre = nombre || 'Valor por defecto '
    console.log ( `HOLA ${nombre}`);
};

saludar('alex');
saludar(); // dara valor por defecto.

/*
Esto funciona por el como el 'OR || ' interpreta las cosas dentro de javascript,
este nos asignara a 'nombre' lo que sea true, es decir, nos dara lo que sea true, si nombre esta 
vacio tendera a false y por ende el string de la derecha sera true, mostrando ese valor.

Aqui algunos ejemplos de valores que arrojan a truly or falsy con el operador ternario or ||
*/

// VALORES QUE TIENDEN A TRUE

console.log ('string ' || 'valor que pasa a TRUE'); // El primer STRING tiende true antes del segundo, por eso se ejecuta;
console.log (91 || 'valor que pasa a TRUE'); // 91 tiende a true y por eso se muestra;
console.log (true || 'valor que pasa a TRUE'); // evidentemente true tiende a true;
console.log ( [] || 'valor que pasa a TRUE'); // un array tiende a true y por eso se muestra;
console.log ({} || 'valor que pasa a TRUE'); // un objeto literal vacio tiende a true y por eso se muestra;

//VALORES QUE TIENDEN A FALSE

console.log (false || 'valor que pasa a TRUE'); // false es false, y el string para ser true, mostrandose a su vez
console.log (null|| 'valor que pasa a TRUE');// Null tiende a false, mostrandose el string que pasa a true;
console.log (undefined|| 'valor que pasa a TRUE');//undefined tiende a false, y se muestra el valor true;
console.log (''|| 'valor que pasa a TRUE');//un string vacio pasa a false, y se muestra el valor true;
console.log (0|| 'valor que pasa a TRUE');//0 pasa a false, y se muestra el valor true;


/*
Esto tambien se puede llevar a cabo con el operador ternario and &&
pero con este pasara exactamente lo mismo pero al reves, cuando el valor tienda a false sera el que se 
ejecute en nuestro codigo, lo opuesto que con or || 

aca algunos ejemplos:
*/



// VALORES QUE TIENDEN A TRUE

console.log ('string '  && 'Valor por defecto si a la izquierda es true');  // el valor de la izquierda tiende a true, por ende se ejecuta el valor de la derecha;
console.log (91  && 'Valor por defecto si a la izquierda es true'); // el valor de la izquierda tiende a true, por ende se ejecuta el valor de la derecha;
console.log (true  &&'Valor por defecto si a la izquierda es true'); // el valor de la izquierda tiende a true, por ende se ejecuta el valor de la derecha;
console.log ( []  &&'Valor por defecto si a la izquierda es true'); // el valor de la izquierda tiende a true, por ende se ejecuta el valor de la derecha;
console.log ({}  &&'Valor por defecto si a la izquierda es true');  // el valor de la izquierda tiende a true, por ende se ejecuta el valor de la derecha;

// VALORES QUE TIENDEN A FALSE

console.log (false  && 'valor que pasa a TRUE'); // El valor de la izquierda tiende a false, por ende es el que se ejecuta;
console.log (null && 'valor que pasa a TRUE');// El valor de la izquierda tiende a false, por ende es el que se ejecuta;
console.log (undefined && 'valor que pasa a TRUE');// El valor de la izquierda tiende a false, por ende es el que se ejecuta;
console.log ('' && 'valor que pasa a TRUE');// El valor de la izquierda tiende a false, por ende es el que se ejecuta;
console.log (0 && 'valor que pasa a TRUE');// El valor de la izquierda tiende a false, por ende es el que se ejecuta;