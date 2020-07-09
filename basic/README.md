Este proyecto utiliza Deno

# Rxjs

Es una libreria para componer programas asíncronos y basados en eventos usando secuencias y observables.
Nos permite realizar programación reactiva.
Combina el patrón Observer con el patrón Iterator y la programación funcional con colecciones para satisfacer la necesidad de una forma ideal
de gestionar secuencia de eventos.

## Programación reactiva

Es una programación orientada al manejo de streams de datos asíncronos y la propagación de los cambios.
Es un listener que esta espando por algun cambio en los datos y en el cado que se produsca algun cambio, eso desencadena varios eventos en cascada.

### Observable

Representa la idea de una colección invocable de valores o eventos futuros.
Los observables son colecciones Push diferidas de múltiples valores.

### Observer

Es una colección de devoluciones de llamada que sabe escuchar los valores entregados por el Observable.

### Suscription

Representa la ejecución de un Observable, es principalmente útil para la cancelación de la ejecución.

### Operators

Son funciones puras que permiten un estilo de programación funcional para manejar colecciones con operaciones como:
map, filter, concat, reduce, etc.

### Subject

Es el equivalente a un EventEmitter y la única forma de multidifusión de un valor o evento a múltiples observadores.

### Schedulers

Son despachadores centralizados para controlar la concurrencia, lo que nos permite coordinar cuando el cálculo ocurre.


