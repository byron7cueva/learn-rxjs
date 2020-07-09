# Subject

Es un tipo especial de Observable, que permite que los valores sean multidifusión (multicasted) a muchos Observers.
Mientras un Observable son unicast, cada Observer suscrito posee una ejecución omdependiente del observable.
Son como EventEmmiters, ellos manienen un registro de muchos listeners.
Todo Subject es un Observable: Se puede suscribir al subject, proveendole un observer y comenzar a recibir valores. Desde el Observador no se puede determinar si la ejecución proviene desde un Observable
unicast o multicast.
Internamente en un Subject, un susbscribe no invoca una nueva ejecución para entregar valores. Simplemente registra el Observer en una lista de Observers, de manera similar como addListener.
Todo subject es un observer: Es un objeto con los métodos next(v), error(e) y complete().
Para alimentar un nuevo valor al Subject, se debe llamar a next(valor) y sera multidifundido a los Obsevers registrados para ecuchar.
Como un Subject es un Observer, este tambien se puede proporcionar como argumeento para un subscribe a cualquier Observable.

## Multicasted Observables

Un multicast observable pasa notificaciones a través de un Subject que puede tener muchos Subscribers, mientras que un unicast observable simple solo envía notificaciones a un único Observador.
Un multicast obaservable usa un Subject bajo una cubierta para hacer que múltiples Observers vean la misma ejecución de un Observable.
