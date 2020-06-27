## Pull y Push

Son dos protocolos diferentes que describen como un data Producer puede comunicarse con un data Consumer.

### Pull

En sistemas Pull, el consumidor determina cuando reciber los datos del data Producer. El Producer no sabe cuando se entregaran lo datos al consumidor.

El Producer es pasivo y este produce datos cuando se los pide, el consumidor esta activo y este decide cuando pedir datos.

Todas las funciones en JavaScript funcionan como un sistema pull. Las funciones son los data Producer, y cuando llamamos a estas funciones estamos consumiendo haciendo un pulling y retornandonos un simple valor.

### Push

En sistemas Push, El Produceer determina cuando los datos se enviaran al Consumer. El Consumer no sabe cuando recibira los datos.

El Producer es activo y produce datos cuando lo necesite, el consumer es pasivo reaccina cuando resive datos.

Las promesas son un sistema push. Una promesa (Producer), entrega un valor resuelto a las llamadas (consumer), pero a diferencia de las funciones, la promesa se encarga de determinar con presición cuandó ese valor se transfiere a las devoluciones de las llamadas.

Rxjs introduce Observables, un nuevo sistema Push. Un Observable es un Producer de multiples valores y los Observers que son los Consumer.

*Function:* Es un cálculo bajo demanda evaluado que devuelve sincrónicamente un valor único en la invocación.
*Generator:* Es un cálculo bajo demanda evaluado que sincrónicamente devuelve cero a infinitos valores en la iteracción.
*Promise:* Es un cálculo que puede o no eventualmente devolver un solo valor.
*Observable:* Es un cálculo bajo demanda evaluado que puede devolver de forma síncrona o asíncrona cero a infinitos valores desde el momento que se invoca en adelante.

## Observables como generalizaciones de funciones

Los Observables no son como los EventEmitter ni son Promesas para valores múltiples. Los Observables pueden actuar como EventEmitter en algunos casos, cuando se multidifunden usando RxJS Subjects, pero generalmente no actuan como EventEmitter.

Los observables son como funciones con cero argumentos, pero los generalizan para permitir multiples valores.

Suscribirce a un observable es un analogo a llamar a una funcion.
Los Observables no son asincronos, cuando se realiza una siscripcipon esta es enteramente síncrona como la llamada a una función.
Los Observables pueden entregar valores sincrónicamente y asincrónicamente.
Los Observables pueden entregar multiples valores a lo largo del tiempo, algo que las funciones no pueden.
Las Funciones solo pueden devolver un solo valor de forma sincrona, sin embargo los Observables pueden devolver multiples valores, de forma sincrona o asíncrona.

## Anatomia de un Observable

### Creando un observable

Los observables se puede crear a traves de crear un nuevo Observable o un operador de creación. A los suscriptores del observable, se puede ejecutar para entregar next / error / complete y su ejecución también puede ser eleminada.

### Suscribiendose a un Observable

* Cada llamada a observable.suscribe activa su propia configuracio independiente para ese suscriptor dato.
* Suscribirce a un observable es como llamar a una funcion, proporcionando callback a donde se devolveran los datos.
* Esto es diferente a la API de eventos de addEventListener / removeEventListener. Con observable.suscribe, el observador dado no está registrado como oyente en el Observable. El observable ni siquiera mantiene una lista de observables adjuntos.
* Una llamada a suscribe es una forma de comenzar la ejecucion del Observable (Observable execution) y entregar valores o eventos a un observador de esa ejecucion.

### Ejecutando un observable

* El codido que se encuentra dentro de new Observable(function subscribe(subscriber) {...}) se representa como "Observer execution", un computo bajo demanda que solo sucede por cada observer que se suscribe. La ejecucion produce multiples valores mientras se ejecuta, ya sea asincrona o sincrona.

* Un observable puede devolver los siguientes tipos
*Next:* notificacion que envia un valor el cual puede ser Number, String o Object. Representan los datos reales que son entregados al suscriptor.
*Error:*  notificacion que envia una Excepcion. Solo puede ocurrir una sola vez.
*Complete:* notificacion que no envia algun valor. Solo puede ocurrir una sola vez.

Error y complete solo pueden ocurrir una de ellas y despues no se puede realizar otra devolución mas.

### Eliminar la ejecución de un observable

* La ejecución de un observable puede ser infinita y por lo tanto queramos abortar la ejecucución. 
Ya que cada ejecucion es exclusiva a un solo Observer, una vez que el observer aya teminado de recibir los valores, debe haber la manera de terminar con la ejecucion para evitar el desperdicio de energia de computo o recursos de memoria.

* Cuando observable.suscribe es llamado, el observador se adjunta a la ejecucion del Observable, eto tambien devuelve un objeto Suscription.
* Una Suscription representa a una ejecución en curso, subscription.unsubscribe() puede cancelar la suscripcion.
* Cada Observable debe definir como disponer los recursos de esa ejecucion. Puede hacerlo devolviendo una función de cancelación de suscripcion personalizada desde la funcion suscribe().