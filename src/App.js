import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <body>
          <h1>Sign here:</h1>
          <canvas width="600" height="300"></canvas>
          <div class="button-container">
            <button>Clear</button>
          </div>
          <script src="hello.js"></script>
        </body>
      </header>
    </div>
  );
}

export default App;
