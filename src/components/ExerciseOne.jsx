const { useState, useEffect, useRef } = React;

function ExerciseOne() {
  const STORAGE_KEY = "js-academy-ex1-completed";
  const CONSOLE_COMMENT = `// Escribe un console.log con un mensaje\n`;
  const [code, setCode] = useState(CONSOLE_COMMENT);
  const [output, setOutput] = useState([]);
  const [status, setStatus] = useState(null);
  const [completed, setCompleted] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "1"
  );
  const textareaRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, completed ? "1" : "0");
  }, [completed]);

  function resetTemplate() {
    setCode(CONSOLE_COMMENT);
    setOutput([]);
    setStatus(null);
  }
  function handleCheck() {
    setStatus(null);
    const logs = [];
    const originalConsoleLog = console.log;
    let execError = null;
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
      execError = err;
      setOutput(prev => [...prev, `Error: ${err.message}`]);
    } finally {
      console.log = originalConsoleLog;
    }

    const hasConsoleLog = /console\.log\s*\(/.test(code);
    const produced = logs && logs.filter(Boolean).length > 0;

    if (!hasConsoleLog) {
      setStatus({
        ok: false,
        message: "Añade un console.log('con un mensaje dentro') en tu código.",
      });
      setCompleted(false);
      return;
    }

    if (execError || !produced) {
      setStatus({
        ok: false,
        message:
          "Tu código no produjo salida válida. Asegúrate de usar console.log con un mensaje y que no haya errores.",
      });
      setCompleted(false);
      return;
    }

    setStatus({
      ok: true,
      message: "¡Perfecto! Tu console.log imprimió un mensaje.",
    });
    setCompleted(true);
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-primary">
          Ejercicio 1 — Tu primer "Hello World"
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="mb-2 text-gray-200">
            {`Escribe una línea con `}
            <code className="px-1 py-0.5 rounded bg-slate-800">
              console.log('tu mensaje')
            </code>
            {` que muestre un mensaje gracioso. Ejemplo: Salté tan alto que caí encima de Bowser.`}
          </div>

          <div className="bg-[#071029] p-4 rounded-lg border border-primary/60 bricks">
            <textarea
              ref={textareaRef}
              value={code}
              onChange={e => setCode(e.target.value)}
              rows={10}
              className="w-full bg-transparent text-gray-100 font-mono text-sm p-3 rounded outline-none resize-none"
            />
          </div>

          <div className="flex gap-2 mt-3">
            <button
              onClick={handleCheck}
              className="px-3 py-2 bg-blue-600 text-white rounded shadow"
            >
              Ejecutar código
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
        </div>

        <div>
          <div className="p-3 bg-[#071029] rounded border border-primary/60">
            <div className="flex items-center justify-between mb-2">
              <strong className="text-primary">Salida / Consola</strong>
              <div className="text-xs text-gray-300">
                Guardado: {completed ? "✅" : "—"}
              </div>
            </div>
            <div className="min-h-[120px] max-h-64 overflow-auto text-sm text-gray-100 font-mono bg-black/20 p-2 rounded">
              {output.length === 0 ? (
                <div className="text-gray-400">
                  Aquí aparecerá lo que imprima console.log(...)
                </div>
              ) : (
                output.map((ln, i) => (
                  <div key={i} className="py-0.5">
                    {ln}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-3 p-3 bg-[#071029] rounded border border-primary/60 text-sm text-gray-300">
            <strong className="text-primary">Consejos</strong>
            <ul className="list-disc ml-5 mt-2">
              <li>Usa comillas simples o dobles en tu mensaje.</li>
              <li>
                Evita código complejo: este ejercicio solo busca un console.log.
              </li>
              <li>
                Tu progreso se guarda localmente en el navegador mediante
                localStorage.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exponer globalmente para que App.jsx (cargado después) pueda usarlo sin bundler
window.ExerciseOne = ExerciseOne;
