/*
Module
------

Significa o sirven para mandar a llamar mas archivos javascript no solo desde 
el HTML si no que desde el mismo archivo javascritp interno puedes mandar a 
llamar a otro. 

Como invocar?
/////////////

Si el creador de una libreria te indica colocar la invocacion del archivo js en html 
en la parte de la cabezera hazlo, de lo contrario esto es un error, se debe de colocar 
al final antes de que la etiqueta body haga cierre.

es importante agregar al final de invocar el codigo js la etiqueta type con el 
valor "module"  type : "module"

si de casualidad quieres agregar soporte a navegadores viejos solo tienes que 
agregar una etiqueta al final con el valor "nomodule"


ORDENAMIENTO DE CODIGO
*/