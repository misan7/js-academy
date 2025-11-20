const { useState, useRef, useEffect } = React;

function Exercise({ exercise }) {
  const STORAGE_KEY = `js-academy-ex${exercise.id}-completed`;
  const TEMPLATE = exercise.template;
  const [code, setCode] = useState(TEMPLATE);
  const [output, setOutput] = useState([]);
  const [status, setStatus] = useState(null);
  const [completed, setCompleted] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "1"
  );
  const taRef = useRef(null);

  useEffect(() => {
    setCode(exercise.template || "");
    setOutput([]);
    setStatus(null);
    const key = `js-academy-ex${exercise.id}-completed`;
    setCompleted(localStorage.getItem(key) === "1");
    if (taRef.current) taRef.current.focus();
  }, [exercise && exercise.id]);

  function resetTemplate() {
    setCode(TEMPLATE);
    setOutput([]);
    setStatus(null);
  }

  function runAndValidate() {
    setStatus(null);
    const logs = [];
    const originalConsoleLog = console.log;
    try {
      console.log = function (...args) {
        logs.push(
          args
            .map(a => (typeof a === "object" ? JSON.stringify(a) : String(a)))
            .join(" ")
        );
        originalConsoleLog.apply(console, args);
      };
      const wrapped = new Function(code);
      wrapped();
      setOutput(logs);
    } catch (err) {
      setOutput(prev => [...prev, `Error: ${err.message}`]);
      setStatus({ ok: false, message: "Error al ejecutar el código." });
      setCompleted(false);
      console.log = originalConsoleLog;
      return;
    } finally {
      console.log = originalConsoleLog;
    }

    // Validaciones según metadatos del ejercicio
    const v = exercise.validators || {};

    if (v.requiredNames && Array.isArray(v.requiredNames)) {
      const missing = v.requiredNames.some(
        name => !new RegExp(`\\b${name}\\b`).test(code)
      );
      if (missing) {
        setStatus({
          ok: false,
          message: v.messageMissingPattern || "Faltan variables requeridas.",
        });
        setCompleted(false);
        return;
      }
    }

    if (v.requiredPatterns && Array.isArray(v.requiredPatterns)) {
      const ok = v.requiredPatterns.every(pat => pat.test(code));
      if (!ok) {
        setStatus({
          ok: false,
          message:
            v.messageMissingPattern || "No se cumple la condición requerida.",
        });
        setCompleted(false);
        return;
      }
    }

    const produced = logs && logs.filter(Boolean).length > 0;
    if (!produced) {
      setStatus({
        ok: false,
        message:
          v.messageMissingPattern || "Tu código no imprimió nada en consola.",
      });
      setCompleted(false);
      return;
    }

    setStatus({
      ok: true,
      message: exercise.successMessage || "Ejercicio completado.",
    });
    setCompleted(true);
    localStorage.setItem(STORAGE_KEY, "1");

    window.dispatchEvent(
      new CustomEvent("exercise:completed", {
        detail: { exercise: exercise.id },
      })
    );
  }

  return (
    <div id={`exercise-${exercise.id}`} className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-primary">{exercise.title}</h2>
      </div>

      <div className="mb-4 text-gray-200 leading-relaxed space-y-3 text-sm md:text-base">
        <div dangerouslySetInnerHTML={{ __html: exercise.instructions }} />
      </div>

      <div className="bg-[#071029] p-4 rounded-lg border border-primary/60 bricks">
        <textarea
          ref={taRef}
          value={code}
          onChange={e => setCode(e.target.value)}
          rows={10}
          className="w-full bg-transparent text-gray-100 font-mono text-sm p-3 rounded outline-none resize-none"
        />
      </div>

      <div className="flex gap-2 mt-3">
        <button
          onClick={runAndValidate}
          className="px-3 py-2 bg-blue-600 text-white rounded shadow"
        >
          Ejecutar Código
        </button>
        <button
          onClick={resetTemplate}
          className="px-3 py-2 bg-slate-700 text-white rounded"
        >
          Reiniciar
        </button>
      </div>

      {status && (
        <div
          className={`mt-3 p-3 rounded ${
            status.ok ? "bg-green-700 text-white" : "bg-red-700 text-white"
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="mt-4 p-3 bg-[#071029] rounded border border-primary/60">
        <strong className="text-primary">Salida / Consola</strong>
        <div className="min-h-[80px] mt-2 text-sm text-gray-100 font-mono bg-black/20 p-2 rounded">
          {output.length === 0 ? (
            <div className="text-gray-400">
              Aquí aparecerá la salida de console.log(...)
            </div>
          ) : (
            output.map((ln, i) => <div key={i}>{ln}</div>)
          )}
        </div>
      </div>
    </div>
  );
}

window.Exercise = Exercise;
