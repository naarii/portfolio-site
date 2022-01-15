import doggo from '../images/doggo.png';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={doggo} className="App-logo" alt="logo" />
        <p>
          This is going to be my own website!
        </p>
      </header>
      <footer>
        <p>
          Made by Anna Losowicka in React
        </p>
      </footer>
    </div>
  );
}

export default App;
