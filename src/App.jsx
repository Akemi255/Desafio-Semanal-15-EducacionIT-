import "./App.css";
import ClimaCiudad from "./components/ClimaCiudad";


function App() {

  const apiKey = "44a0ec8c2a35f28f1909f2d89a6fd654";
  const ciudad = "Cuenca";

  return (
    <div className="App">
      <h1>Consulta de Clima</h1>
       <ClimaCiudad ciudad={ciudad} apiKey={apiKey} />
    </div>
  );
}

export default App;
