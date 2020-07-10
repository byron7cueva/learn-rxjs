import { interval } from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
// Cancelando la suscripción
subscription.unsubscribe();