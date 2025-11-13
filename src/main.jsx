// Archivo de entrada que monta la app
function mountApp() {
  const AppComponent = window.App;
  if (!AppComponent) {
    console.error("App no está disponible para renderizar");
    return;
  }
  const rootEl = document.getElementById("root");
  if (!rootEl) {
    console.error("No se encontró #root en el DOM");
    return;
  }
  const root = ReactDOM.createRoot(rootEl);
  root.render(<AppComponent />);
}

// Montar cuando el DOM esté listo. Dado que index.html carga los scripts en orden,
// App debería estar definida cuando este archivo se ejecute; escuchar DOMContentLoaded
// hace la lógica más robusta si el navegador ejecuta scripts antes de parsear el DOM.
if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", mountApp);
} else {
  mountApp();
}
