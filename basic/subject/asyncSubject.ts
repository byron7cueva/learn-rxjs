import {
  AsyncSubject
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts'

const subject = new AsyncSubject();

subject.subscribe({
  next: v => console.log('Observer A: ', v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: v => console.log('Observer B: ', v)
});

subject.next(5);
// Solo se entrega 5 una vez que se completa (llama a complete()) la ejecucion
subject.complete();