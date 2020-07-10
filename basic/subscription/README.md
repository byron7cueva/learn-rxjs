# Subscription

- Es un objeto que representa una recurso disposable, usualmente la ejecicion de un observable.
- Tiene el metodo unsubscribe, para darse de baja, no requiere argumentos y solo elimina el recurso que posee la subscripción.
- unsubscribe() permite liberar recursos o cancelar ejecuciones de observables.
- Las suscripciones tambien se pueden agrupar, de modo que una llamada  a una cancelación a una subscripción puede cancelar varias subscripciones. Se puede hacer esto agregando una suscripción a otra.
- También tiene un metodo remove(), para deshacer la adición de una suscripción secundaria.