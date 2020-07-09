import {
  ReplaySubject
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';

// Buffer de 3 valores para nuevos suscriptores
const subject = new ReplaySubject(3);

subject.subscribe({
  next: v => console.log('Observer A: ', v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

// Imprimira solo los tres ultimos valores notificados: 2, 3, 4
subject.subscribe({
  next: v => console.log('Observer B: ', v)
});

subject.next(5);

// Tiempo de antiguedad
console.log('Tiempo de antiguedad');

//Se le asigna un tiempo de antiguedad de 50 millisegundos
const subject2 = new ReplaySubject(100, 50);

subject2.subscribe({
  next: v => console.log('Observer A: ', v)
});

let i = 1;
setInterval(() => subject2.next(i++), 200);

setTimeout(() => {
  // Se tomara los valores registrados hace 50 millisegundos
  // antes de ser subscrito el segundo obsever
  subject2.subscribe({
    next: v => console.log('Observer B: ', v)
  });
}, 1000);