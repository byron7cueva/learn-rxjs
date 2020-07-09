import { Observable } from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';

// Suscribirce a un observer es analogo de llamar a una funcion
const foo = new Observable(suscriber => {
  console.log('Hola');
  suscriber.next(42);
});

foo.subscribe(x => {
  console.log(x);
});

foo.subscribe(y => {
  console.log(y);
});

// Los observables pueden realizar multiples devoluciones
// Salida sincrona
const foo2 = new Observable(suscribe => {
  suscribe.next(1);
  suscribe.next(2);
  suscribe.next(3);
});
console.log('Antes de suscribirce');
foo2.subscribe(x => {
  console.log(x);
});
console.log('Despues de suscribirce');

// Salida asincrona
console.log('Salida asincrona');
const foo3 = new Observable(suscribe => {
  suscribe.next(1);
  suscribe.next(2);

  setTimeout(() => {
    suscribe.next(3);
  }, 1000);
});
console.log('Antes de suscribirce');
foo3.subscribe(x => {
  console.log(x);
});
console.log('Despues de suscribirce');

// Contrato de un Observable
console.log('Contrato de un observable');
const observable = new Observable(subscriber => {
  try {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
    subscriber.next(4); // Esto no se devuelve ya que se ha completado el observable
  } catch (e) {
    subscriber.error(e); // Devuelve un error
  }
});

console.log('Antes de suscribirce');
// Un suscription representa la ejecucion de un observer
observable.subscribe({
  // Observer
  next(x) { console.log(`El valor de x: ${x}`); },
  error(e) { console.error(`Alguna cosa ocurrio ${e.message}`); },
  complete() { console.log('Termino'); }
});

observable.subscribe(
  x => console.log('EL valor de x: ', x),
  error => console.error(error.message),
  () => console.log('Completo')
)

console.log('Despues de suscrbirce');

// Cancelando suscripcion
const observable2 = new Observable(suscribe => {
  const intervalId = setInterval(() => {
    suscribe.next('Hola');
  }, 1000)

  // funcion que se ejecuta al ejecutar unsubscribe
  return () => {
    clearInterval(intervalId);
  }
});

const suscription = observable.subscribe(x => console.log(x))
// Deteniendo ejecucion, liberando el recurso
suscription.unsubscribe();