import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <h1>Mi primer app</h1>
      <form className="formulario">
        <p><input type="text" className="entrada" placeholder="Ingrese su Nombre" /></p>
        <p><input type="text" className="entrada" placeholder="Ingrese su Apellido" /></p>
        <input className="boton" type="submit" id="save" value="Guardar"/><br/>

      </form>
    </div>
  );
}

export default App;
