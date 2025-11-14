const { useState, useRef } = React;

function ExerciseTwo() {
  const STORAGE_KEY = "js-academy-ex2-completed";
  const TEMPLATE = `// Ejemplo: const animal = "Unicornio" \n// Escribe tu código debajo: \n`;
  const [code, setCode] = useState(TEMPLATE);
  const [output, setOutput] = useState([]);
  const [status, setStatus] = useState(null);
  const [completed, setCompleted] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "1"
  );
  const taRef = useRef(null);

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

    const hasProducto = /\b(producto)\b/.test(code);
    const hasPrecio = /\b(precio)\b/.test(code);
    const hasDisponible = /\b(disponible)\b/.test(code);
    const produced = logs && logs.filter(Boolean).length > 0;

    if (!hasProducto || !hasPrecio || !hasDisponible) {
      setStatus({
        ok: false,
        message:
          "Declara las variables producto, precio y disponible (usa var/let/const).",
      });
      setCompleted(false);
      return;
    }

    if (!produced) {
      setStatus({
        ok: false,
        message:
          "Tu código no imprimió nada en consola. Asegúrate de usar console.log para mostrar las variables.",
      });
      setCompleted(false);
      return;
    }

    setStatus({
      ok: true,
      message:
        "¡Bien! Has declarado las variables y las has mostrado por consola.",
    });
    setCompleted(true);
    localStorage.setItem(STORAGE_KEY, "1");
  }

  return (
    <div id="exercise-2" className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-primary">
          Ejercicio 2 — Aprendiendo Variables I
        </h2>
      </div>

      <div className="mb-4 text-gray-200 leading-relaxed space-y-3 text-sm md:text-base">
        <p className="text-gray-300">
          Las variables sirven para almacenar y manipular los datos de una
          aplicación
        </p>
        <p className="text-gray-300">
          Declara tres variables que almacenen la información de un animal
          mitológico. Este ejercicio te ayudará a practicar la sintaxis de
          declaración (<span className="font-semibold">const</span> o{" "}
          <span className="font-semibold">let</span>) y la asignación de valores
          según el tipo de dato.
        </p>

        <p className="font-semibold">Declara las siguientes variables:</p>

        <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-200">
          <li>
            <code className="bg-slate-800 px-1 py-0.5 rounded">
              nombreAnimal
            </code>
            : Debe ser un <span className="italic">string</span> y almacenar el
            nombre de un animal mitológico (ej:{" "}
            <span className="font-medium">"Unicornio"</span>).
          </li>
          <li>
            <code className="bg-slate-800 px-1 py-0.5 rounded">edad</code>: Debe
            ser un <span className="italic">number</span> y almacenar su edad en
            años (ej: <span className="font-medium">220</span>).
          </li>
          <li>
            <code className="bg-slate-800 px-1 py-0.5 rounded">existe</code>:
            Debe ser un <span className="italic">boolean</span> e indicar si
            existe en la actualidad (ej:{" "}
            <span className="font-medium">true</span> o{" "}
            <span className="font-medium">false</span>).
          </li>
        </ol>

        <p className="text-gray-300">
          Asegúrate de asignarles un valor inicial. Finalmente, utiliza la
          función{" "}
          <code className="bg-slate-800 px-1 py-0.5 rounded">
            console.log()
          </code>{" "}
          para mostrar el valor de las tres variables por la consola.
        </p>
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
          Comprobar
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

window.ExerciseTwo = ExerciseTwo;
