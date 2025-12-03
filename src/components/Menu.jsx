const { useState } = React;

function Menu({ onStart }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        {/* Logo y título */}
        <div className="mb-8">
          <h1 className="text-6xl font-extrabold text-primary mb-4 tracking-tight">
            📚 JS CodeWorld
          </h1>
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Academy
          </h2>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            Aprende fundamentos de JavaScript mediante ejercicios interactivos con validación en tiempo real
          </p>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
          <div className="bg-dark-bg/50 border border-primary/30 rounded-lg p-4 hover:border-primary/60 transition-all">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="text-primary font-semibold mb-1">Validación automática</h3>
            <p className="text-sm text-gray-400">Retroalimentación instantánea</p>
          </div>
          
          <div className="bg-dark-bg/50 border border-primary/30 rounded-lg p-4 hover:border-primary/60 transition-all">
            <div className="text-3xl mb-2">💻</div>
            <h3 className="text-primary font-semibold mb-1">Ejecución en tiempo real</h3>
            <p className="text-sm text-gray-400">Código ejecutado en el navegador</p>
          </div>
          
          <div className="bg-dark-bg/50 border border-primary/30 rounded-lg p-4 hover:border-primary/60 transition-all">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-primary font-semibold mb-1">Progresión guiada</h3>
            <p className="text-sm text-gray-400">Ejercicios secuenciales</p>
          </div>
          
          <div className="bg-dark-bg/50 border border-primary/30 rounded-lg p-4 hover:border-primary/60 transition-all">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="text-primary font-semibold mb-1">Feedback educativo</h3>
            <p className="text-sm text-gray-400">Mensajes personalizados</p>
          </div>
        </div>

        {/* Botón Comenzar */}
        <button
          onClick={onStart}
          className="group relative px-12 py-4 bg-primary hover:bg-primary/90 text-white text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
        >
          <span className="flex items-center gap-3 justify-center">
            Comenzar
            <svg 
              className="w-6 h-6 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Footer */}
        <div className="mt-12 text-sm text-gray-500">
          <p>Presiona "Comenzar" para iniciar tu viaje en JavaScript</p>
        </div>
      </div>
    </div>
  );
}

window.Menu = Menu;
