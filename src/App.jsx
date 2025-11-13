function App() {
  // ExerciseOne estará disponible en window después de cargar ExerciseOne.jsx
  const ExerciseComp = window.ExerciseOne;

  return (
    <div className="min-h-screen pt-12 pb-12">
      <div className="max-w-4xl mx-auto p-6 bg-dark-bg rounded-xl shadow-2xl border border-primary/50">
        <h1 className="text-4xl font-extrabold text-primary mb-4 border-b pb-2">
          JS CodeWorld Academy
        </h1>
        {ExerciseComp ? (
          <ExerciseComp />
        ) : (
          <div className="text-gray-300">Cargando ejercicio...</div>
        )}
      </div>
    </div>
  );
}

// Añadimos estilo 'bricks' desde aquí para mantenerlo centralizado
const style = document.createElement("style");
style.textContent = `
  .bricks { background-image: linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 40px 20px, 40px 20px; background-position: 0 0, 20px 10px; }
`;
document.head.appendChild(style);

window.App = App;
