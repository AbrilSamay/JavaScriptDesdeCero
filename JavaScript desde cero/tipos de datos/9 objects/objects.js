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
        console.log(`Hola de nuevo ${nombre} ${apellido}, espero todo vaya de maravilla`)
    }
}


console.log(Jota)
console.log (Jota ["nombre"])
console.log (Jota.altura)
Jota.saludar()