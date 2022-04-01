import logo from './logo.svg';
import './App.css';
import API from "./config/instance";


function App() {

  API.get("/ltaodataservice/TaxiStands").then(res => {
    console.log(res);
    alert('here');
    let data = res.value;
  });

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
          Learn React (Deploy Test)
        </a>
        {data}
      </header>
    </div>
  );
}

export default App;
