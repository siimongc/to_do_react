import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Person nombre="Simon" edad="20"/>
        </a>
      </header>
      <Person nombre="Simon" edad="20"/>
      <Person nombre="juan" edad="22"/>
      <Person nombre="camila" edad="22"/>
      <Person nombre="laura" edad="23"/>
      <Person nombre="jason" edad="24"/>
    </div>
  );
}

function Person(props){
  return(
    <div className='person'>
      <h3>Nombre: {props.nombre} </h3>
      <h2>edad: {props.edad}</h2>

    </div>
  )
}

export default App;
