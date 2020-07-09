import {
  Subject,
  from
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';

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