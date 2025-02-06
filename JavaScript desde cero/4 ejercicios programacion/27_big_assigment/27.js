/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

    Todos los datos del objeto son obligatorios.

        Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
                Valida que el título no rebase los 100 caracteres.
                Valida que el director no rebase los 50 caracteres.
                Valida que el año de estreno sea un número entero de 4 dígitos.
                 Valida que el país o paises sea introducidos en forma de arreglo.
                 Valida que los géneros sean introducidos en forma de arreglo.
                 Valida que los géneros introducidos esten dentro de los géneros aceptados*.

                 Crea un método estático que devuelva los géneros aceptados*.
                 Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.

                 Crea un método que devuelva toda la ficha técnica de la película.
                 Apartir de un arreglo con la información de 3 películas genera 3 

                 instancias de la clase de forma automatizada e imprime la ficha técnica 
                 de cada película.

    Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/

class Pelicula {
    constructor ({ id, titulo, director, estreno, paises, genero, calificacion }){
        this.id = this.idValidator ('ID', id);
        this.titulo = this.lenghtCheker ("titulo",titulo, 5) // tiene que ser 100, se usara 5 para test 
        this. director = director;
        this. estreno = estreno, 
        this.paises = paises; 
        this.genero = genero;
        this.calificacion = calificacion;
    }

    /*
                    MULTIUSO FUNCIONES 
                    ------------------
    */

    // is empty validator (se usara en todas las demas funciones)
    isEmpty (propiedad, instancia) {
        if (!instancia) {
            console.warn (`No has ingresado un valor en ${propiedad} \n (IS EMPTY FUCTION)`)
            return true;
        }
    }
    
    // solo string validator 

    stringValidator (propiddad, string){
        if (typeof string !== 'string') {
            console.warn (`${propiddad} en ${string} no es un texto valido \n (asegurate de solo ingresar texto)`);
            return true;
        }
    }

    // length cheker 

    lenghtCheker (propiedad, instancia, cantidad){
        let copyInstancia = instancia;
        if (!isNaN (copyInstancia)) copyInstancia = String.isString(copyInstancia)
        if (this.isEmpty(propiedad, instancia)) {return}
        if (copyInstancia.length > cantidad) return console.warn (`La cantidad de caracteres ingresados '${copyInstancia}' en el ${propiedad} sobrepasa el limite \n contiene ${copyInstancia.length} caracteres cuando el limite es: ${cantidad}`);
    }

    

    /*
                    PROPOSITO UNICO FUNCIONES
                    -------------------------
    */
                      
     // ID validator; 
     idValidator (propiedad, id){
        if (this.isEmpty (propiedad, id)) {return}
        if (!/^[A-Za-z]{2}\d{7}$/.test(id)){ return console.warn (`El ${propiedad}: "${id}" no es un ID valido, asegurate que empieza por 2 letras y 7 numero \n (XX1234567) \n (ID VALIDATOR FUCTION)`)} 
    }

}


const peliTest = new Pelicula ({
    id: 'xx1234567',
    titulo: '12323456y',
    director: "juan carlos",
    estreno: 2025, 
    pais: ['h','h'],
    genero: ['Homosexual', "accion", 'caballo'],
    calificacionIMBD: 'ni perra idea'
})


