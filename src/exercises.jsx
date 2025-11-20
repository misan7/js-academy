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
        "Usa console.log(...) para imprimir en la consola.",
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
        "Usa console.log(...) para imprimir en la consola.",
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
        "Usa console.log(...) para imprimir en la consola.",
    },
    successMessage:
      "¡Perfecto! Has declarado una const y la has mostrado por consola.",
  },

  {
    id: 5,
    title: "Ejercicio 5 — Concatenación de Strings",
    instructions: `En JavaScript puedes unir (concatenar) dos textos usando el operador <code>+</code>.<br><br>Declara dos variables: <code>nombre</code> y <code>apellido</code>. Luego crea una tercera llamada <code>nombreCompleto</code> que las una con un espacio en medio. Imprime el resultado.`,
    template: `// Ejemplo:\n// const saludo = "Hola" + " " + "Mundo";\n\n// Escribe tu código debajo:\n`,
    validators: {
      requiredNames: ["nombre", "apellido", "nombreCompleto"],
      requiredPatterns: [/\+/],
      messageMissingPattern:
        "Asegúrate de usar el operador '+' para unir las cadenas de texto.",
    },
    successMessage: "¡Genial! Has aprendido a unir cadenas de texto.",
  },

  {
    id: 6,
    title: "Ejercicio 6 — Template Literals",
    instructions: `Una forma más moderna de unir textos es usar <strong>Template Literals</strong> con comillas invertidas (<code>\`</code>).<br><br>Declara una variable <code>mascota</code> con el nombre de un animal. Luego usa <code>console.log</code> para imprimir una frase que incluya la variable usando la sintaxis <code>\`Mi mascota es \${mascota}\`</code>.`,
    template: `const mascota = "Gato";\n// Escribe tu console.log usando backticks (\`) y \${} debajo:\n`,
    validators: {
      requiredNames: ["mascota"],
      requiredPatterns: [/`/, /\$\{.*\}/],
      messageMissingPattern:
        "Recuerda usar las comillas invertidas (`) y la sintaxis ${variable}.",
    },
    successMessage:
      "¡Excelente! Los Template Literals son muy útiles para insertar variables en textos.",
  },

  {
    id: 7,
    title: "Ejercicio 7 — Operadores Matemáticos",
    instructions: `Vamos a calcular el área de un rectángulo. Declara <code>base</code> (con valor 10) y <code>altura</code> (con valor 5).<br><br>Crea una variable <code>area</code> que sea el resultado de multiplicar <code>base</code> por <code>altura</code> usando el asterisco <code>*</code>. Muestra el <code>area</code> en consola.`,
    template: `// Declara base y altura, luego calcula el area:\n`,
    validators: {
      requiredNames: ["base", "altura", "area"],
      requiredPatterns: [/\*/],
      messageMissingPattern:
        "Necesitas usar el operador de multiplicación (*) para calcular el área.",
    },
    successMessage:
      "¡Bien hecho! Ya dominas las operaciones matemáticas básicas.",
  },

  {
    id: 8,
    title: "Ejercicio 8 — Introducción a Arrays",
    instructions: `Un <strong>Array</strong> es una lista ordenada de datos. Se declara usando corchetes <code>[]</code>.<br><br>Crea una variable llamada <code>frutas</code> que contenga al menos 3 nombres de frutas (strings) dentro de los corchetes, separados por comas. Imprime el array.`,
    template: `// Ejemplo: const numeros = [1, 2, 3];\n// Crea tu array de frutas debajo:\n`,
    validators: {
      requiredNames: ["frutas"],
      requiredPatterns: [/\[.*,.*,.*\]/],
      messageMissingPattern:
        "Asegúrate de crear un array con [...] y que tenga al menos 3 elementos separados por comas.",
    },
    successMessage:
      "¡Perfecto! Los arrays son fundamentales para guardar listas de datos.",
  },

  {
    id: 9,
    title: "Ejercicio 9 — Objetos Literales",
    instructions: `Los objetos nos permiten guardar propiedades con una clave y un valor usando llaves <code>{}</code>.<br><br>Crea un objeto llamado <code>usuario</code> que tenga las propiedades <code>nombre</code> y <code>edad</code>. Imprime el objeto en consola.`,
    template: `// Ejemplo:\n// const coche = {\n//   marca: "Toyota",\n//   ruedas: 4\n// };\n\n// Crea tu objeto usuario debajo:\n`,
    validators: {
      requiredNames: ["usuario"],
      requiredPatterns: [/\{/, /nombre\s*:/, /edad\s*:/],
      messageMissingPattern:
        "El objeto debe tener las llaves { } y las propiedades 'nombre' y 'edad' separadas por dos puntos.",
    },
    successMessage: "¡Felicidades! Has creado tu primer objeto en JavaScript.",
  },
];
