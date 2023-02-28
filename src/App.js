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
      </header>
    </div>
  );
}

export default App;
