import {
  BehaviorSubject
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';

// Valor inicial
// Este valor recibira el primer observer que se suscriba
const subject = new BehaviorSubject(0);

subject.subscribe({
  next: v => console.log('Observer A: ', v)
});

subject.next(1);
subject.next(2);

// Este segundo observer recibe el valor de 2
// aunque se suscribió después de que se envió el valor 2
subject.subscribe({
  next: v => console.log('Observer B: ', v)
});

subject.next(3);