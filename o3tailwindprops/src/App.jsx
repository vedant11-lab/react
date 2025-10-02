import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Card channel="react" btnTxt="Learn More" />
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Counter: {count}
      </h1>
      
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>

      {/* eslint-disable @next/next/no-img-element */}
    </>
  )
}

export default App
