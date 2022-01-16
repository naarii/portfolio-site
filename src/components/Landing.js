import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Landing = () => {
  return (
    <div className="App">
      <header className="App-header">
        <button>
        <Link to="/home">Enter Site</Link>
        </button>
        
      </header>
    </div>
  );
}

export default Landing;