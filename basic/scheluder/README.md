# Scheluder (Planificador)

- Controla cuando comienza una suscripción y cuándo se entregan las notificaciones.
- Permite definir en que contexto de ejecución un Observable entregará notificaciones a su Observador.

Se compone de 3 componentes:

- *Es una estructura de datos.* Sabe cómo almacenar y poner en cola las tareas según según la prioridad u otros criterios.
- *Es un contexto de ejecución.* Denota dónde y cuándo se ejecuta la tarea.
- *Tiene un reloj (virtual)*. Proporciona una noción de tiempo mediante un método getter now() en el Scheluder. Las tareas que se programan en un Scheluder particular se adherirán solo a la hora indicada por ese reloj.