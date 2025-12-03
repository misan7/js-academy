# 📚 JS CodeWorld Academy

Una aplicación educativa interactiva para aprender fundamentos de JavaScript mediante ejercicios prácticos y validación en tiempo real.

![Version](https://img.shields.io/badge/version-0.0.1-blue)
![React](https://img.shields.io/badge/React-18.x-61dafb)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 Descripción

**JS CodeWorld Academy** es una plataforma educativa interactiva que permite a estudiantes aprender JavaScript de forma práctica. Los ejercicios se ejecutan directamente en el navegador, proporcionando retroalimentación inmediata y validación automática del código.

### Características principales

- 💻 **Ejecución en tiempo real**: Código JavaScript ejecutado directamente en el navegador
- ✅ **Validación automática**: Sistema de validadores que comprueban la corrección del código
- 🎨 **Interfaz moderna**: Diseño con Tailwind CSS y paleta de colores personalizada
- 🔄 **Sin dependencias de build**: Usa React UMD + Babel standalone (sin bundler)
- 📝 **Editor integrado**: Área de código con sintaxis resaltada y captura de `console.log`
- 🎯 **Progresión guiada**: Sistema de ejercicios secuenciales con dificultad creciente
- 🎓 **Feedback educativo**: Mensajes personalizados de éxito y ayuda para cada ejercicio
- 🌈 **Tema personalizable**: Sistema de variables CSS para cambiar colores fácilmente

## 🚀 Instalación

### Pasos de instalación

1. **Clona el repositorio** (o descarga el código):
   ```bash
   git clone <url-del-repositorio>
   cd js-academy
   ```

2. **Sirve el proyecto por HTTP** (necesario para que Babel cargue scripts externos):

   **Opción 1: Con Python**
   ```bash
   python3 -m http.server 8000
   ```

   **Opción 2: Con Node.js**
   ```bash
   npx http-server -c-1 .
   ```

3. **Abre tu navegador** y visita:
   ```
   http://localhost:8000
   ```

## 🎯 Cómo usar

1. **Lee las instrucciones** cuidadosamente
2. **Escribe tu código** en el editor proporcionado
3. **Ejecuta el código** para ver el resultado en la consola
4. **Avanza al siguiente ejercicio** una vez completado

### Consejos

- Lee bien las instrucciones antes de empezar a codificar
- Usa `console.log()` para depurar tu código
- Los validadores comprueban tanto la sintaxis como la lógica
- Puedes reintentar tantas veces como necesites

## 🛠️ Tecnologías utilizadas

- **React 18.x** - Librería de UI (UMD build)
- **Babel Standalone** - Transpilación de JSX en el navegador
- **Tailwind CSS** - Framework de utilidades CSS (CDN)
- **CSS3** - Variables CSS personalizadas para tematización

## 📁 Estructura del proyecto

```
js-academy/
├── index.html              # Punto de entrada, carga React UMD y Babel
├── src/
│   ├── styles.css          # Variables CSS y estilos globales
│   ├── exercises.jsx       # Definición de ejercicios (metadatos y validadores)
│   ├── main.jsx           # Montaje de la aplicación
│   ├── App.jsx            # Control de flujo y navegación entre ejercicios
│   └── components/
│       └── Exercise.jsx   # Componente genérico para ejecutar y validar código
└── README.md
```

## 🎨 Arquitectura del sistema

### Componentes principales

- **`Exercise.jsx`**: Componente reutilizable que:
  - Renderiza el editor de código
  - Ejecuta código usando `new Function()`
  - Captura salidas de `console.log`
  - Aplica validadores declarativos
  - Muestra mensajes de éxito/error

- **`App.jsx`**: Gestiona:
  - Estado global de progresión (qué ejercicio está activo)
  - Modal de presentación de ejercicios
  - Navegación entre ejercicios

- **`exercises.jsx`**: Define cada ejercicio con:
  - `id`: Identificador único
  - `title`: Título del ejercicio
  - `instructions`: Descripción de la tarea
  - `template`: Código inicial
  - `validators`: Array de funciones de validación
  - `successMessage`: Mensaje al completar

### Sistema de validación

Los validadores son funciones que reciben:
- `code`: Código escrito por el estudiante
- `output`: Salida capturada de `console.log`

Y retornan:
- `{ valid: true }` si el código es correcto
- `{ valid: false, message: "..." }` si hay errores

## 📝 Añadir nuevos ejercicios

Para agregar un ejercicio, edita `src/exercises.jsx`:

```javascript
{
  id: 5,
  title: "Tu nuevo ejercicio",
  instructions: "Descripción clara de la tarea...",
  template: "// Código inicial para el estudiante\n",
  validators: [
    (code, output) => {
      // Tu lógica de validación
      if (output.includes("resultado esperado")) {
        return { valid: true };
      }
      return { valid: false, message: "Pista para el estudiante" };
    }
  ],
  successMessage: "¡Excelente! Has completado el ejercicio."
}
```

## 🎨 Personalización de estilos

La paleta de colores se define en `src/styles.css` usando variables CSS:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  /* ... más variables */
}
```

Tailwind CSS está configurado para usar estas variables, permitiendo cambiar todo el tema desde un único archivo.

## ⚠️ Notas de seguridad

> **IMPORTANTE**: El código del estudiante se ejecuta usando `new Function(code)` directamente en el navegador. Esto es adecuado para un entorno educativo controlado, pero **NO es seguro para código arbitrario en producción**.

### Mejoras futuras de seguridad

- Implementar ejecución en Web Workers con timeout para evitar bucles infinitos
- Añadir sandboxing más robusto
- Limitar acceso a APIs del navegador

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar la plataforma:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevoEjercicio`)
3. Commit tus cambios (`git commit -m 'Add: Ejercicio de arrays'`)
4. Push a la rama (`git push origin feature/NuevoEjercicio`)
5. Abre un Pull Request

### Ideas para contribuir

- ✨ Añadir más ejercicios de JavaScript
- 🧪 Implementar tests automáticos para validadores
- 🎨 Mejorar el diseño y UX
- 🌐 Añadir soporte multiidioma
- 🔒 Mejorar seguridad con Web Workers
- 📊 Añadir sistema de progreso y estadísticas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Sergio MT**

Creado con ❤️ para aprender JavaScript.

---