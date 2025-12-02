# JS CodeWorld Academy

Pequeña aplicación educativa para aprender fundamentos de JavaScript mediante ejercicios interactivos.

Resumen

- Aplicación React cargada en el navegador usando UMD builds y Babel standalone (sin bundler).
- Tailwind CDN para utilidades de estilo; paleta centralizada en `src/styles.css` (variables CSS).
- El componente genérico `Exercise` carga ejercicios desde `src/exercises.jsx` y permite ejecutar y validar código del alumno.

Archivos clave

- `index.html`: entrada, carga Tailwind, React UMD, Babel standalone y los scripts JSX.
- `src/exercises.jsx`: lista de ejercicios (metadatos, plantilla, validadores y mensajes).
- `src/components/Exercise.jsx`: componente genérico reutilizable que ejecuta código, captura `console.log` y valida según los metadatos.
- `src/App.jsx`: control de flujo y modal — muestra un único `Exercise` a la vez y permite avanzar 1→2→3→4.
- `src/main.jsx`: montaje de la app en `#root`.
- `src/styles.css`: variables de color y reglas globales mínimas (la fuente de verdad de colores está en `:root`).

Cómo ejecutar en desarrollo

1. Servir el proyecto por HTTP (necesario para que Babel cargue scripts externos):

```bash
# desde la raíz del repo
python3 -m http.server 8000
# o
npx http-server -c-1 .
```

2. Abrir en el navegador: `http://localhost:8000`

Notas de desarrollo

- Añadir o editar ejercicios: modifica `src/exercises.jsx`. Cada entrada debe tener: `id`, `title`, `instructions`, `template`, `validators` y `successMessage`.
- Validadores: el componente `Exercise` aplica las comprobaciones declaradas en `validators`. Revisa las expresiones regulares y reglas si necesitas casos más flexibles.
- Estilo / Tema: la paleta se define en `:root` (`src/styles.css`). `tailwind.config` en `index.html` usa `var(--color-...)` para que Tailwind genere utilidades que resuelven las variables en tiempo de ejecución.

Cómo colaborar

- Mantén la paleta en `src/styles.css` y usa las variables en los componentes (Tailwind ya referencia esas variables). Esto permite cambiar tema en un único sitio.
- Si quieres añadir tests automáticos para validación de ejercicios, considera extraer los validadores a funciones puras y escribir pruebas unitarias.
- Actualmente el código del alumno se ejecuta usando `new Function(code)` y capturamos `console.log` para evaluar salida. Esto es suficiente para ejercicios didácticos, pero no es seguro para código arbitrario en producción.
- Hay intentos/ideas para ejecutar el código en un Web Worker con timeout para evitar bucles infinitos; esa implementación no está completada o puede necesitar refinado.
- Algunas validaciones usan expresiones regulares simples; pueden dar falsos positivos/negativos en casos complejos.
