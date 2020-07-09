// @ts-nocheck
const {
  scan,
  throttleTime,
  map
} = rxjs.operators;

const button = document.getElementById('evento');
rxjs.fromEvent(button, 'click')
  .subscribe(evt => console.log(evt));

// scan: Es como reducer, pero emite la acumulación actual cuando la fuente emite un valor
const butttonCount = document.getElementById('contador');
rxjs.fromEvent(butttonCount, 'click')
  .pipe(
    //scan(funcionAcomulativa(acomulador), valorInicial)
    scan(accomulator => accomulator + 1, 0)
  )
  .subscribe(accomulator => console.log(accomulator));

// Limitando el tiempo de clicks
// throttleTime: Permite pasar un valor, luego ignora los valores de origen para la próxima duración en millisegundos
const buttonPrevClick = document.getElementById('prevClick');
rxjs.fromEvent(buttonPrevClick, 'click')
.pipe(
  // Da un tiempo para la siguiente ejecucion en este caso 3000 milisegundos
  throttleTime(3000),
  scan(count => count + 1, 0)
)
.subscribe(count => console.log('Valor: ', count));


const buttonMouse = document.getElementById('mouse');
rxjs.fromEvent(buttonMouse, 'click')
  .pipe(
    throttleTime(1000),
    map(event => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe(count => console.log(count));
