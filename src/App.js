import logo from './logo.svg';
import './App.css';
import API from "./config/instance";
import { useEffect, useState } from 'react';



function App() {
  const [taxis, setTaxis] = useState([]);

  useEffect(() => {
    getAllTaxis()
  })

  const getAllTaxis = () => {
    API.get("/ltaodataservice/TaxiStands")
    .then(res => {
      console.log(res);
      alert('here');
      let data = res.value;
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  

  return (
    <div className="App">
      <header className="App-header">
          <h1>Learn React (Deploy Test)</h1>
      </header>
    </div>
  );
}

export default App;
