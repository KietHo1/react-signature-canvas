import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <form class="signature-website-form" action="#" method="post">
            <h1>Contract</h1>
            <p>Contract description</p>
            
            <p>
                <b>Signature</b>
            </p>

            <canvas height="100" width="300" class="signature-website"></canvas>

            <p>
                <button class="clear-button">Clear</button>
            </p>

            <button class="submit-button" type="submit">SUBMIT</button>

        </form>
        <scripts src="hello.js"></scripts>
      </header>
    </div>
  );
}

export default App;
