//MANEJO DE ERRORES

/**
 JavaScript tiene una herramineto bastante util para saber si
  nuestro codigo tienen algun tipo de error 

  Para eso contamos con try-catch - finally una herramienta que nos ayudara a evaluar
  nuestro codigo en busqueda de variables no declaradas, y entre otras cosas u errores

 */

  try {
    console.log ('En el bloque de catch se evalua el codigo en cuestion')
    console.log('segunda linea en el bloque catch ')
    console.log('tercera linea en el bloque catch')
  } catch (error) {
    console.log('Si hay algun error el bloque catch se ejecutara con las instrucciones que le brindes')
    console.log(error)
    
  } finally {
    console.log('El bloque finally se ejecutara de igual manera, por eso no es tan usado.')
  }

  // En este caso no se ejecuta el bloque catch por que no se encuentra ningun tipo de error.

  try {
    console.log ('agregaremos un error a proposito')
    noExiste;
    console.log('segunda linea en el bloque catch ')
    console.log('tercera linea en el bloque catch')
  } catch (error) {
    console.log('Si hay algun error el bloque catch se ejecutara con las instrucciones que le brindes')
    console.log(error)
    //alert(`Existe el siguiete error: ${error}`)
  } finally {
    console.log('El bloque finally se ejecutara de igual manera, por eso no es tan usado.')
  }

  // En este caso si se ejecuta el bloque y nos especifica el error.




  try {
    console.log ('Errores personalizados ')
    let numero = prompt ("ingresa un numero")
    if (isNaN(numero)) {
        throw new Error ('UN NUMERO DIJE!!!')
        }
        resultado =numero * numero;
        console.log (resultado);
        alert (`Resultado es ${resultado}`)
  } catch (Error) {
    alert (Error)
  }