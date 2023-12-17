import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
const [number1,setNum1] = useState('');
const [number2,setNum2] = useState('');
  const [res,setRes] = useState('');

  const handleAddition = ()=>{
    const sum = parseInt(number1) + parseInt(number2);
    setRes(sum);
  };
  
  return (
    <div id="main">
      <input id='input1' value={number1} onChange={(e)=>setNum1(e.target.value)}/>
       +
      <input id='input2' value={number2} onChange={(e)=>setNum2(e.target.value)}/> 
      
      <p id='result'>{handleAddition()}</p>
    </div>
  )
}


export default App;
