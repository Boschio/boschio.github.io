import selfie from './images/bosch.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={selfie} className="App-logo" alt="logo" />
        <p>
          My name is James A. Bosch and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/Boschio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
