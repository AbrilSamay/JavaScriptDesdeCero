// objectos en javascript 


/*los objetos son una coleccion de "llave"-"valor" algo similar a las 
propiedas de CSS  

En resumen, son llaves con valores */

// EJEMPLO DE UN OBJETO

const Jota = {
    nombre:'alexis',
    apellido: 'romana',
    edad: 20,
    altura: 1.66,
    peso: '70 kg',
    talla: 'M',
    pasatiempos: [`programar`,'leer', 'tocar violin'],
    soltero: true,
    contacto: {whatsapp: 87989801,
               email: 'alexisjosueromanaenamorado@gmail.com',
               facebook: 'Alexis Romana'
    },
    saludar: function (){
        let nombre = 'alexis'
        let apellido = 'romana'
        console.log(`Hola de nuevo ${this.nombre} ${this.apellido}, espero todo vaya de maravilla`)
    }
}


//Dentrot de un objeto a las variables se les llama atrivutos o propiedades 
// y a las funciones se les llama 'metodo'

console.log(Jota)
console.log (Jota ["nombre"])
console.log (Jota.altura)
Jota.saludar()
console.log (Object.keys(Jota)) // Crea una lista con las llaves del objeto.

console.log (Object.values(Jota)) // Crea una lista con las valores del objeto. 
