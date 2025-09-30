import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);
  

   //let counter = 15

   const addValue = () => {
    if(counter >= 20){
      alert("Counter cannot be more than 20")
      return;
    }
    else{setCounter(counter + 1);}
    console.log("value added", counter );
   }

   const removeValue = () => {
    if(counter <= 0){
      alert("Counter cannot be less than 0")
      return;
    }
    else{setCounter(counter - 1);}
    console.log("value removed", counter );
   }

  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
