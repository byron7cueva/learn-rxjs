import {
  Subject,
  Subscription,
  ConnectableObservable,
  from
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';
import {
  multicast
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/operators.ts';

// Operador multicast
// Bajo el capó, así es como funciona el operador multicast: Los observers se suscriben
// a un Subject, y el Subject se suscribe al Observable fuente.
console.log('Tercer ejemplo');
const sourceObservable = from([111, 222, 333]);
const subject3 = new Subject();
// Devuelve un ConnectableObservable
const multicasted = sourceObservable.pipe(multicast(subject3)) as ConnectableObservable<number>;

multicasted.subscribe({
  next: v => console.log('Observador A: ', v)
});
multicasted.subscribe({
  next: v => console.log('Observador B', v)
});

// connect nos permite indicar cuando se realiza la ejecución de un observable compartido
multicasted.connect();