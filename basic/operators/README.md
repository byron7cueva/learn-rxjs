# Operators

Son piesas escenciales que permiten que el código aíncrono complejo se componga facilmente de manera declarativa. Son funciones.
Todos los operadores son constructores ya se que necesiten argumentos o no.

Tenemos 2 tipo de operators.

## Pipleable Operators:

* Son aquellos que se pueden canalizar a un Observable usando la sistaxis observableInstance.pipe(operator()). Cuando se los llama no cambian la instancia Observable existente. En cambio, devuelven un nuevo observable, cuya lógica de suscripción se basa en el primer observable.
* Es una funcion pura que toma un Observable como entrada y devulve otro Observable de salida. El observable anterior permanece sin modificaciones.
* Suscribiendose a la salida del observable también se suscribirá a la entrada del observable.
* Son funciones, por lo cual se podrian utilizar como funciones ordinarias. Pero en la práctica al
llamar a muchas de ellas se vuelve ilegible: op4()(op3()(op2()(op1()(obs)))). Por esta razón, los observables tienen un metodo llamado pipe(), que logra lo mismo y es mucho mas fácil entender, se debe utilizar de esa manera incluso si solo hay un operador.

## Creation Operators

* Estos se pueden llamar como funciones independientes para crear un nuevo observable.
* Son funciones que se pueden usar para crear un Observable con un comporatiemro predefinido común o uniendo otros observables.
* Un ejemplo seria el interval oprator el cual toma un numero como argumento de entrada y produce un observable de salida

## Observables de orden superior

* Los observables mas comunmente emiten valores ordinarios como strings y numbers, pero aveces es necesario manejar observables de observables, también llamados observables de orden superior.
* Para trabajar con un observable de orden superior, se debe aplanar, es decir convirtiendole el observable de orden superior a un observable ordinario.

### Operadores de Union

Son operadores de aplanamiento.

*concatAll():* Suscribe a acada observable interno que sale del observable externo, y copia todos los valores emitidos hasta que ese observable se completa y pasa al siguiente. Todos los valores estan concatenados de esa manera.
*mergeAll():* se suscribe a cada observable interno a medida que llega, luego emite a cada valor a medida que llega.
*switchAll():* Se suscribe al primer observable interno cuando llega, y emite cada valor a memida que llega, pero cuando llega el siguiente observable interno, se dea de baja del anterior y se suscribe al nuevo.
*exhaust():* Se suscribe al primer observable interno cuando llega, y emite cada valor a medida que llega, descartando todos los Observables internos recién llegados hasta que se complete el primero, luego espera el siguiente observable interno.

Existen equivalente de mapeo de todos los operadores de aplanamiento RxJS concatMap(), mergeMap(), switchMap() y exhaustMap().

## Categoria de operadores

Hay operadores para diferentes propósitos y se pueden clasificar en: creación, transformación, filtrado, unión, multidifusión, manejo de errores, utilidad, etc.