const { useState, useEffect, useRef } = React;

function App() {
  const ExerciseOneComp = window.ExerciseOne;
  const ExerciseTwoComp = window.ExerciseTwo;
  const [showModal, setShowModal] = useState(false);
  const [showExerciseTwo, setShowExerciseTwo] = useState(false);
  const twoRef = useRef(null);

  useEffect(() => {
    function onExerciseCompleted(e) {
      if (e && e.detail && e.detail.exercise === 1) {
        setShowModal(true);
      }
    }
    window.addEventListener("exercise:completed", onExerciseCompleted);
    return () =>
      window.removeEventListener("exercise:completed", onExerciseCompleted);
  }, []);

  function goToExerciseTwo() {
    setShowExerciseTwo(true);
    setShowModal(false);
    requestAnimationFrame(() => {
      if (twoRef.current) twoRef.current.scrollIntoView({ behavior: "smooth" });
    });
  }

  return (
    <div className="min-h-screen pt-12 pb-12">
      <div className="max-w-4xl mx-auto p-6 bg-dark-bg rounded-xl shadow-2xl border border-primary/50">
        <h1 className="text-4xl font-extrabold text-primary mb-4 border-b pb-2">
          JS CodeWorld Academy
        </h1>

        {ExerciseOneComp ? (
          <ExerciseOneComp />
        ) : (
          <div className="text-gray-300">Cargando ejercicio 1...</div>
        )}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowModal(false)}
            />
            <div className="relative bg-dark-bg border border-primary/60 rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl text-primary font-bold mb-2">
                {" "}
                ¡Felicidades futuro Dev!¡Ejercicio 1 completado!
              </h3>
              <p className="text-gray-300 mb-4">
                ¿Quieres continuar con el siguiente ejercicio sobre variables?
              </p>
              <div className="flex gap-2 justify-end">
                <button
                  className="px-3 py-2 bg-slate-700 text-white rounded"
                  onClick={() => setShowModal(false)}
                >
                  Aún no...
                </button>
                <button
                  className="px-3 py-2 bg-primary text-white rounded"
                  onClick={goToExerciseTwo}
                >
                  Ir a Ejercicio 2
                </button>
              </div>
            </div>
          </div>
        )}

        {showExerciseTwo && (
          <div ref={twoRef} className="mt-8">
            {ExerciseTwoComp ? (
              <ExerciseTwoComp />
            ) : (
              <div className="text-gray-300">Cargando ejercicio 2...</div>
            )}
          </div>
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
