# Subject

Es un tipo especial de Observable, que permite que los valores sean multidifusión (multicasted) a muchos Observers.
Mientras un Observable son unicast, cada Observer suscrito posee una ejecución omdependiente del observable.
Son como EventEmmiters, ellos manienen un registro de muchos listeners.
Todo Subject es un Observable: Se puede suscribir al subject, proveendole un observer y comenzar a recibir valores. Desde el Observador no se puede determinar si la ejecución proviene desde un Observable
unicast o multicast.
Internamente en un Subject, un susbscribe no invoca una nueva ejecución para entregar valores. Simplemente registra el Observer en una lista de Observers, de manera similar como addListener.
Todo subject es un observer: Es un objeto con los métodos next(v), error(e) y complete().
Para alimentar un nuevo valor al Subject, se debe llamar a next(valor) y sera multidifundido a los Obsevers registrados para ecuchar.
Como un Subject es un Observer, este tambien se puede proporcionar como argumento para un subscribe a cualquier Observable.

## Multicasted Observables

Un multicast observable pasa notificaciones a través de un Subject que puede tener muchos Subscribers, mientras que un unicast observable simple solo envía notificaciones a un único Observador.
Un multicast obaservable usa un Subject bajo el capó para hacer que múltiples Observers vean la misma ejecución de un Observable.
*multicast:* Devuelve un Observable que funciona como un Subject cuando se trata de suscribirse. Este devuelve un ConnectableObservable, que es un Observable con el método connect(), este método determina exactamente cuando la ejecución compartida del Observable empieza, debido a que connect() realiza el observableSource.subscribe(subject) bajo el capó, y devuelve una subscripción desde la cual se puede llamar a cancelar la ejecución compartida a traves del unsubscribe.

Si deseamos evitar la llamada explicita a connect(), podemos usar el método refCount() de ConnectableObservable (recuento de referencia) que devuelve un Observable que realiza un seguimiento de cuantos subscriptores tiene. Cuando el número de subscriptores aumenta de 0 a 1, llamara a connect() para nosotros, lo que iniciaria la ejecucion compartida. Solo cuando el número de suscriptores disminuya de 1 a 0, se cancelará la suscripción y se detendra la ejecucion.
El método refCount() solamente existe en ConnectableObservable y este retorna un Observable no otro ConnectableObservable.

## a

### BehaviourSubject

- Este tiene una noción del valor actual. Almacena el ultimo valor emitido a sus consumidores y cada vez que un nuevo Observer se suscribe, recibirá de inmediato el valor actual del BehaviourSubject.
- Son útiles para reprentar valores a lo largo del tiempo.

### ReplaySubject

- Puede enviar valores antiguos a nuevos suscriptores, pero también puede registrar una parte de la ejecución del Observable.
- Registra multiples valores desde la ejecución del Observable y los reproduce a un nuevos suscriptores.
- Al crearlo se puede especificar cuantos valores reproducir.
- Tambien se puede especificar una ventana de tiempo en millisegundos, además del tamaño del buffer, para determinar la antigüedad de los valores registrados.

### AsyncSubject

- Es una variante donde solamente el último valor de la ejecución del Observable se envia a sus observers y solo cuando su ejecución se completado.
- Es similar al operador last(), ya que espera la notificacion complete para entregar un único valor.