import logo from './netflix.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome to netflix wrapped
        </p>
        <a
          className="App-link"
          href="https://www.netflix.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here to log in and get started
        </a>
      </header>
    </div>
  );
}

export default App;
