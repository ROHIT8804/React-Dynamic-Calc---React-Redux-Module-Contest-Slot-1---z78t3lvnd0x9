import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [number1, setNum1] = useState('');
  const [number2, setNum2] = useState('');
  const [res, setRes] = useState(0); // Changed to a number instead of string

  useEffect(() => {
    const sum = parseInt(number1 || 0, 10) + parseInt(number2 || 0, 10); // Calculate sum whenever number1 or number2 changes
    setRes(sum);
  }, [number1, number2]);

  return (
    <div id="main">
      <input id='input1' value={number1} onChange={(e) => setNum1(e.target.value)} />
      +
      <input id='input2' value={number2} onChange={(e) => setNum2(e.target.value)} />

      {/* Displaying the result */}
      <p id='result'>{res}</p>
    </div>
  );
}


export default App;
