import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with <span style={{color: 'red'}}>Docker</span>
        </a>
        <br/>
        <a className="App-link"
           href="https://github.com/cslant"
           target="_blank"
           rel="noopener noreferrer">
          Docker setup by
          <span style={{color: 'rgba(14, 116, 67, 1)'}}>
            <strong>CSLANT</strong>
          </span>
        </a>
      </header>
    </div>
  );
}

export default App;
