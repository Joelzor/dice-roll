import "./App.css";
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);

  function generateNumbers() {
    const array = [];
    for (let i = 0; i < 3; i++) {
      const num = Math.floor(Math.random() * 101);
      array.push(num);
    }
    setNumbers(array);
  }

  return (
    <>
      <h1>Roll the dice</h1>
      <button onClick={generateNumbers}>Generate numbers</button>
      <ul>
        {numbers.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
