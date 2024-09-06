
const numeros = [1,2,3,4,5,6,7,8,9,0];


// for (let index = 0; index < numeros.length; index++) {

//     if (index===5){
//         break;
//     }
//     const element = numeros[index];
//     console.log (element)
// }

// for (let index = 0; index < numeros.length; index++) {
//     const elemento = numeros[index];

//     if (index===5){
//         continue;
//     }

//     console.log ( elemento)
    
// }


// imprimir solo los numeros pares del arrays 'numeros'


try {

    const numeros = [1,2,3,4,5,6,7,8,9,0,1000,403,300];

    for (let index = 1; index < numeros.length; index+=2 ) {
    
        const element = numeros[index];
        console.log (element) 
    }

    console.log (` `)
    for (let ind = 2; ind < numeros.length; ind+=3) {
        const element = numeros[ind];
        console.log (element)
        
    }

    console.log (' ')

    for (let holis = 1; holis < numeros.length; holis*=2) {
        const element = numeros[holis];
        console.log (element)
        
    }

    console.log ('dame un espacion aca por favor ')

    for (let h = 0; h < numeros.length; h++) {
        const element = numeros[h];
        modulo = element % 2;

        switch (modulo) {
            case 0:
                console.log (element ,'es un numero par')
              break;
        
        }
        
    }


    console.log("PARES");
    for (let u = 0; u < numeros.length; u++) {
      if (numeros[u] % 2 === 0) {
        console.log(numeros[u]);
      }
    }
    
    console.log("IMPARES");
    for (let u = 0; u < numeros.length; u++) {
      if (numeros[u] % 2 === 0) {
        continue;
      }
      console.log(numeros[u]);
    }
    
    
    console.log ('Estos son los elementos de array')


   



    
} catch (error) {
    console.log (error)
 
    
}
