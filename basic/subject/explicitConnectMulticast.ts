import {
  Subject,
  interval,
  Subscription,
  ConnectableObservable
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';
import {
  multicast
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/operators.ts';

// Llamando explicitamente a connect()
console.log('Cuarto ejemplo');
const sourceObservable4 = interval(500);
const subject4 = new Subject();
const multicasted4 = sourceObservable4.pipe(multicast(subject4)) as ConnectableObservable<number>;

console.log('Observer 1 es subscribe');
const subscription1 = multicasted4.subscribe({
  next: v => console.log('Observer 1: ', v)
});

// Llamando a connect ya que tenemos un observer
// interezado en consumir valores
console.log('multicast observable is connected');
const subscriptionConnect = multicasted4.connect();
let subscription2: Subscription;

setTimeout(() => {
  console.log('Observer 2 es subscribe');
  subscription2 = multicasted4.subscribe({
    next: v => console.log('Observer 2: ', v)
  });
}, 600);

setTimeout(() => {
  console.log('Observer 1 unsubscribe from multicast observable');
  subscription1.unsubscribe();
}, 1200);

// Unsuscribe a la ejecución compartida del Observable.
setTimeout(() => {
  console.log('Observer 2 unsubscribe');
  subscription2.unsubscribe();
  console.log('connection to multicasted observable unsubscribe');
  subscriptionConnect.unsubscribe();
}, 2000);