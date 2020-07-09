// Subject
import {
  Subject
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';

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