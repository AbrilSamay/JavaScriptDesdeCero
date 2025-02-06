class Pelicula {
    // asignaciones construnstor 
    constructor ({id, titulo, director, estreno, pais, genero, calificacionIMBD}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno; 
        this.pais = this.arrayValidator('pais',pais); 
        this.genero = genero; 
        this.calificacionIMBD = calificacionIMBD;


        this.arrayValidator ("propiedad", pais)
    }
    // funciones que validaran 

    // validar id 


    stringValidation (propiddad, string ){
        this.emptyStringValidator (string);
        
    }

    // Validar largo del texto
    lengthValidation (propiedad, string, cantidad){
        let acumulador = string;
        if (!isNaN (string)) {acumulador = string.toString()};
        if (!acumulador) return console.warn (`${propiedad} en: ${string} esta vacio, asegurate de darle un valor a ${propiedad}`);
        );

    //validar que sea un array
    arrayValidator (array ){
        this.emptyStringValidator (array);
        if (!Array.isArray (array)) return console.warn (`El valor ingresado: ${array}, no viene en forma de array`)
    }
}

