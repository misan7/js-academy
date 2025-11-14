window.EXERCISES = [
  {
    id: 1,
    title: "Ejercicio 1 — console.log básico",
    instructions: `Introduce una llamada a <code>console.log()</code> que imprima cualquier texto. Este ejercicio valida que uses <code>console.log</code> y que la salida se muestre en la consola.`,
    template: `// Escribe aquí tu código. Ejemplo:\n// console.log('Hola Mundo');\n`,
    validators: {
      requiredPatterns: [/\bconsole\.log\(/],
      messageMissingPattern:
        "Usa console.log(...) para imprimir en la consola.",
    },
    successMessage: "¡Bien! Tu código imprimió algo en consola.",
  },

  {
    id: 2,
    title: "Ejercicio 2 — Aprendiendo Variables I",
    instructions: `Declara tres variables: <code>producto</code> (string), <code>precio</code> (number) y <code>disponible</code> (boolean). Luego muéstralas en consola con <code>console.log</code>.`,
    template: `// Ejemplo: const producto = \"Unicornio\" \n// Escribe tu código debajo: \n`,
    validators: {
      requiredNames: ["producto", "precio", "disponible"],
      messageMissingPattern:
        "Declara las variables producto, precio y disponible y muéstralas con console.log().",
    },
    successMessage:
      "¡Bien! Has declarado las variables y las has mostrado por consola.",
  },

  {
    id: 3,
    title: "Ejercicio 3 — Nombres y reasignaciones",
    instructions: `Crea al menos una variable usando <code>let</code> o <code>const</code> y realiza una reasignación si usas <code>let</code>. Muestra el resultado con <code>console.log</code>.`,
    template: `// Practica nombres válidos para variables y reasignaciones.\nlet producto = 'Monitor 23 Pulgadas';\nproducto = 'Monitor 19 Pulgadas';\nconsole.log(producto);\n\n// Escribe tu código debajo:\n`,
    validators: {
      requiredPatterns: [/\b(let|const|var)\s+[a-zA-Z_][\w]*\b/],
      messageMissingPattern:
        "Declara una variable válida usando let/const/var y muestra su valor con console.log().",
    },
    successMessage: "¡Bien! Has declarado variables válidas y mostrado salida.",
  },

  {
    id: 4,
    title: "Ejercicio 4 — Constantes",
    instructions: `Declara una <code>const</code> llamada <code>producto</code> y muéstrala en consola con <code>console.log(producto)</code>.`,
    template: `// Declara una constante llamada producto\nconst producto = 'Monitor 27 Pulgadas';\nconsole.log(producto);\n\n// Escribe tu código debajo:\n`,
    validators: {
      requiredPatterns: [/\bconst\s+producto\b/],
      messageMissingPattern:
        "Declara una constante llamada 'producto' usando const y muéstrala por consola.",
    },
    successMessage:
      "¡Perfecto! Has declarado una const y la has mostrado por consola.",
  },
];
