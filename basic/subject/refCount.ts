import {
  Subject,
  interval,
  Subscription
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';
import {
  multicast,
  refCount
} from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/operators.ts';

const sourceObservable = interval(500);
const subject = new Subject();
const refCounted = sourceObservable.pipe(multicast(subject), refCount());

let subscriptionA: Subscription;
let subscriptionB: Subscription;

console.log('ObserverA susbcribed');
subscriptionA = refCounted.subscribe({
  next: v => console.log('ObserverA: ', v)
});

setTimeout(() => {
  console.log('ObserverB suscribed');
  subscriptionB = refCounted.subscribe({
    next: v => console.log('ObserverB :', v)
  });
}, 600);

setTimeout(() => {
  console.log('ObserverA unsubscribe');
  subscriptionA.unsubscribe();
}, 1200);

setTimeout(() => {
  console.log('ObserverB unsubscribe');
  subscriptionB.unsubscribe();
}, 2000);