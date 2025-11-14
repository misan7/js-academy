const { useState, useEffect, useRef } = React;

function App() {
  const ExerciseComp = window.Exercise;
  const exercises = window.EXERCISES || [];

  const [showModal, setShowModal] = useState(false);
  const [pendingFrom, setPendingFrom] = useState(null);
  const [showExerciseTwo, setShowExerciseTwo] = useState(false);
  const [showExerciseThree, setShowExerciseThree] = useState(false);
  const [showExerciseFour, setShowExerciseFour] = useState(false);

  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);

  useEffect(() => {
    function onExerciseCompleted(e) {
      if (e && e.detail && typeof e.detail.exercise === "number") {
        setPendingFrom(e.detail.exercise);
        setShowModal(true);
      }
    }
    window.addEventListener("exercise:completed", onExerciseCompleted);
    return () =>
      window.removeEventListener("exercise:completed", onExerciseCompleted);
  }, []);

  function goToNext() {
    setShowModal(false);
    if (pendingFrom === 1) {
      setShowExerciseTwo(true);
      requestAnimationFrame(() => {
        if (twoRef.current)
          twoRef.current.scrollIntoView({ behavior: "smooth" });
      });
    } else if (pendingFrom === 2) {
      setShowExerciseThree(true);
      requestAnimationFrame(() => {
        if (threeRef.current)
          threeRef.current.scrollIntoView({ behavior: "smooth" });
      });
    } else if (pendingFrom === 3) {
      setShowExerciseFour(true);
      requestAnimationFrame(() => {
        if (fourRef.current)
          fourRef.current.scrollIntoView({ behavior: "smooth" });
      });
    }
    setPendingFrom(null);
  }

  function modalTitle() {
    if (pendingFrom === 1) return "¡Felicidades! Ejercicio 1 completado";
    if (pendingFrom === 2) return "¡Genial! Ejercicio 2 completado";
    if (pendingFrom === 3) return "¡Avanzando! Ejercicio 3 completado";
    return "¡Ejercicio completado!";
  }

  function modalMessage() {
    if (pendingFrom === 1)
      return "¿Quieres continuar con el siguiente ejercicio sobre variables?";
    if (pendingFrom === 2)
      return "¿Quieres continuar con el siguiente ejercicio sobre nombres y reasignaciones?";
    if (pendingFrom === 3)
      return "¿Quieres continuar con el siguiente ejercicio sobre const?";
    return "¿Quieres continuar con el siguiente ejercicio?";
  }

  function nextLabel() {
    if (pendingFrom === 1) return "Ir a Ejercicio 2";
    if (pendingFrom === 2) return "Ir a Ejercicio 3";
    if (pendingFrom === 3) return "Ir a Ejercicio 4";
    return "Ir al siguiente";
  }

  return (
    <div className="min-h-screen pt-12 pb-12">
      <div className="max-w-4xl mx-auto p-6 bg-dark-bg rounded-xl shadow-2xl border border-primary/50">
        <h1 className="text-4xl font-extrabold text-primary mb-4 border-b pb-2">
          JS CodeWorld Academy
        </h1>

        {ExerciseComp ? (
          <ExerciseComp exercise={exercises[0]} />
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
                {modalTitle()}
              </h3>
              <p className="text-gray-300 mb-4">{modalMessage()}</p>
              <div className="flex gap-2 justify-end">
                <button
                  className="px-3 py-2 bg-slate-700 text-white rounded"
                  onClick={() => setShowModal(false)}
                >
                  Aún no...
                </button>
                <button
                  className="px-3 py-2 bg-primary text-white rounded"
                  onClick={goToNext}
                >
                  {nextLabel()}
                </button>
              </div>
            </div>
          </div>
        )}

        {showExerciseTwo && (
          <div ref={twoRef} className="mt-8">
            {ExerciseComp ? (
              <ExerciseComp exercise={exercises[1]} />
            ) : (
              <div className="text-gray-300">Cargando ejercicio 2...</div>
            )}
          </div>
        )}

        {showExerciseThree && (
          <div ref={threeRef} className="mt-8">
            {ExerciseComp ? (
              <ExerciseComp exercise={exercises[2]} />
            ) : (
              <div className="text-gray-300">Cargando ejercicio 3...</div>
            )}
          </div>
        )}

        {showExerciseFour && (
          <div ref={fourRef} className="mt-8">
            {ExerciseComp ? (
              <ExerciseComp exercise={exercises[3]} />
            ) : (
              <div className="text-gray-300">Cargando ejercicio 4...</div>
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
