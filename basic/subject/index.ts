// Subject
import { Subject, from } from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';
import { multicast } from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/operators.ts';

// Creando el Subject
console.log('Primer ejemplo');
const subject = new Subject<number>();

// Suscribiendose al subject
subject.subscribe({
  // Proveendo el observador
  next: v => console.log('Observer A: ', v)
});

subject.subscribe({
  next: v => console.log('Oberver B: ', v)
});

// Alimimentado datos al subject y se ejecuta el multicast a los observers
subject.next(1);
subject.next(2);

// Un Subject como un observer
// Convertimos una ejecución de un Observable unicast a multicast a traves de un Subject
// Un Subject es la única forma de hacer que cualquier ejecución de un Observable
// se comparta en multiples Observers
console.log('Segundo ejemplo');
const subject2 = new Subject<number>();

subject2.subscribe({
  next: v => console.log('Observer A: ', v)
});

subject2.subscribe({
  next: v => console.log('Observer B', v)
});

const observable = from([10, 20, 30]);

// Utilizando el Subject como un Observer
observable.subscribe(subject2);

// Operador multicast
// Debajo de una cubierta, así es como funciona el operador multicast: Los observers se suscriben
// a un Subject, y el Subject se suscribe al Observable fuente.
console.log('Tercer ejemplo');
const sourceObserver = from([1, 2, 3]);
const subject3 = new Subject<number>();
const multicasted = sourceObserver.pipe(multicast<number>(subject3));

multicasted.subscribe({
  next: v => console.log('Observador A: ', v)
});
multicasted.subscribe({
  next: v => console.log('Observador B', v)
});
