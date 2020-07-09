import { interval } from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';

const observable1 = interval(400);
const observable2 = interval(300);

const subscription1 = observable1.subscribe( x => console.log('primero: ', x));
const subscription2 = observable2.subscribe( x => console.log('segundo: ', x));

// Agrupando subscripociones
subscription1.add(subscription2);

setTimeout(() => {
  // Al detener la subscripcion 1, se detendra tambien la 2
  // subscription1.unsubscribe();
  // Removiendo la subscripcion 2
  subscription1.remove(subscription2);
  // Solo se detendra la subscripcion 1
  subscription1.unsubscribe();
}, 1000);