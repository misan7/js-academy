const { useState, useEffect } = React;

function App() {
  const ExerciseComp = window.Exercise;
  const MenuComp = window.Menu;
  const exercises = window.EXERCISES || [];

  const [gameState, setGameState] = useState("menu"); // "menu" or "playing"
  const [showModal, setShowModal] = useState(false);
  const [pendingFrom, setPendingFrom] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // 0-based index of visible exercise

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
    if (!pendingFrom) return;
    const nextIndex = pendingFrom;
    if (nextIndex >= 0 && nextIndex < exercises.length) {
      setCurrentIndex(nextIndex);
      requestAnimationFrame(() => {
        const el = document.querySelector("#root");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    }
    setPendingFrom(null);
  }

  function modalTitle() {
    const id = pendingFrom;
    if (typeof id !== "number") return "¡Ejercicio completado!";
    return `¡Felicidades! Ejercicio ${id} completado`;
  }

  function modalMessage() {
    const id = pendingFrom;
    if (typeof id !== "number")
      return "¿Quieres continuar con el siguiente ejercicio?";
    const next = id + 1;
    if (next > exercises.length)
      return "Has completado todos los ejercicios disponibles.";
    return `¿Quieres continuar con el siguiente ejercicio (${next})?`;
  }

  function nextLabel() {
    const id = pendingFrom;
    if (typeof id !== "number") return "Ir al siguiente";
    const next = id + 1;
    if (next > exercises.length) return "Finalizar";
    return `Ir a Ejercicio ${next}`;
  }

  const currentExercise = exercises[currentIndex];

  function startGame() {
    setGameState("playing");
  }

  // Render Menu
  if (gameState === "menu") {
    return MenuComp ? <MenuComp onStart={startGame} /> : <div>Cargando...</div>;
  }

  // Render Exercises
  return (
    <div className="min-h-screen pt-12 pb-12">
      <div className="max-w-4xl mx-auto p-6 bg-dark-bg rounded-xl shadow-2xl border border-primary/50">
        <h1 className="text-4xl font-extrabold text-primary mb-4 border-b pb-2">
          JS CodeWorld Academy
        </h1>

        {ExerciseComp && currentExercise ? (
          <ExerciseComp exercise={currentExercise} />
        ) : (
          <div className="text-gray-300">Cargando ejercicio...</div>
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
      </div>
    </div>
  );
}

window.App = App;
