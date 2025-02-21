// asincronia en javascript

/*
La asincronía es uno de los pilares fundamentales de Javascript,
 ya que es un lenguaje de programación de un sólo subproceso o hilo (single thread), 
 lo que significa que sólo puede ejecutar una cosa a la vez.

Si bien los idiomas de un sólo hilo simplifican la escritura de 
código porque no tiene que preocuparse por los problemas de concurrencia,
 esto también significa que no puede realizar operaciones largas como el
  acceso a la red sin bloquear el hilo principal.


Imagina que solicitas datos de una API. Dependiendo de la situación,
 el servidor puede tardar un tiempo en procesar la solicitud mientras 
 bloquea el hilo principal y hace que la página web no responda.

Ahí es donde entra en juego la asincronía que permite realizar largas 
solicitudes de red sin bloquear el hilo principal.

JavaScript fue diseñado para ser ejecutado en navegadores,
 trabajar con peticiones sobre la red y procesar las interacciones 
 de usuario, al tiempo que mantiene una interfaz fluida.

*/
