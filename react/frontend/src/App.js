import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");

  return (
    <div className="App">
      <h1>My React App</h1>
      <input type="text" placeholder="Enter your name" onChange={ e => setName(e.target.value) } />
      <p>{ name ? "Enter a temperature below, " + name + "." : "Type your name above." }</p>

      <input type="number" placeholder="Enter a temperature in F" onChange={ e => setTemp(e.target.value) } />
      <p>{ temp ? "The temperature is " + ((parseFloat(temp) - 32) / 1.8).toFixed(2)  + " C." : "Type a temperature in F above." }</p>
    </div>
  );
}

export default App;
