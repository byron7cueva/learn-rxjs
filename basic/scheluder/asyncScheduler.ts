import {
  Observable,
  asyncScheduler
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';
import {
  observeOn
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/operators.ts';

// Observable normal que emite 1, 2, 3 sincronicamente
const observable = new Observable(proxyObserver => {
  proxyObserver.next(1);
  proxyObserver.next(2);
  proxyObserver.next(3);
  proxyObserver.complete();
}).pipe(
  // Usando el operador observerOn para especificar un async scheluder
  // para la entrega de los valores
  // Este crea un observador proxy entre el nuevo observable y el observador final
  observeOn(asyncScheduler)
);

const finalObserver = {
  next: (x: any) => console.log('Next: Devuelve el valor de :', x),
  error: (err: any) => console.error('Algun error ocurrio: ', err),
  complete: () => console.log('Complete')
};

console.log('Antes de suscribirce');
observable.subscribe(finalObserver);
console.log('Después de suscribirce');
