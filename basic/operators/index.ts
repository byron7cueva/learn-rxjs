// Operadores de creacion
import { Observable, of, from, interval } from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';
// Pipeline Operatos
import { map, tap, filter, first } from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/operators.ts';

const array = [10, 20, 30];
let arrayOf$: Observable<number[]>;
let arrayFrom$: Observable<any>;
let arrayTap$: Observable<any>;

// Pasando el array normal a un array observable
arrayOf$ = of(array);
arrayFrom$ = from(array);

// Ahora me puedo suscribir, para obtener los datos
arrayOf$.subscribe(
  data => console.log('Data of', data)
);

arrayFrom$.subscribe(
  // Me devuelve cada elemento uno por uno
  data => console.log('Data from', data)
);

// Recorre un array uno por uno
// No podemos hacer modificacion de los datos
arrayFrom$.pipe(
  // tap devuelve un observable
  tap(data => console.log('Data tap', data))
).subscribe(
  data => console.log('Data tap suscribe', data)
);

// Esto permite operar con los datos y modificarlos
arrayFrom$.pipe(
  // map devuelve un observable
  map(data => data * 2)
).subscribe(
  data => console.log('Data map', data)
);

const fruits = [
  { fruit: 'apple', color: 'red', size: 'small', hasLeaf: true },
  { fruit: 'apple', color: 'green', size: 'medium', hasLeaf: true },
  { fruit: 'apple', color: 'red', size: 'large', hasLeaf: false },
  { fruit: 'apple', color: 'green', size: 'small', hasLeaf: false },
  { fruit: 'apple', color: 'red', size: 'small', hasLeaf: true }
];

const apples$ = from(fruits);
apples$.pipe(
  // Log de la manzana que lo te toca ser procesada
  tap(apple => console.log('Procesando...', apple)),
  // Filtrando solo manzanas de color rojo
  filter((apple: any) => apple.color === 'red'),
  // Quitando hojas a cada manzana
  map((apple: any) => ({...apple, hasLeaf: false}))
).subscribe(apple => console.log('Mazana aprobada: ', apple));


/* Todos los operadores son constructores */

// map es un analogo al la funcion map de un array
// map((x: number) => x * x)(of(1, 2, 3)).subscribe((v: number) => console.log(`value: ${v}`));

// first
// first()(of(1,2,3)).subscribe((v: any) => console.log(v));

// interval
// const observable = interval(1000);