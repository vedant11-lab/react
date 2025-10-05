import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="relative w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap bottom-4 left-1/2 -translate-x-1/2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button style={{ backgroundColor: 'olive' }} onClick={() => setColor('olive')}>Olive</button>
          <button style={{ backgroundColor: 'skyblue' }} onClick={() => setColor('skyblue')}>Sky Blue</button>
          <button style={{ backgroundColor: 'teal' }} onClick={() => setColor('teal')}>Teal</button>
          <button style={{ backgroundColor: 'coral' }} onClick={() => setColor('coral')}>Coral</button>
          <button style={{ backgroundColor: 'gold' }} onClick={() => setColor('gold')}>Gold</button>
          <button style={{ backgroundColor: 'plum' }} onClick={() => setColor('plum')}>Plum</button>
          <button style={{ backgroundColor: 'salmon' }} onClick={() => setColor('salmon')}>Salmon</button>
          <button style={{ backgroundColor: 'lavender' }} onClick={() => setColor('lavender')}>Lavender</button>
          <button style={{ backgroundColor: 'beige' }} onClick={( ) => setColor('beige')}>Beige</button>
          <button style={{ backgroundColor: 'mintcream' }} onClick={() => setColor('mintcream')}>Mint Cream</button>
          <button style={{ backgroundColor: 'lightgrey' }} onClick={() => setColor('lightgrey')}>Light Grey</button>
          <button style={{ backgroundColor: 'lightyellow' }}  onClick={() => setColor('lightyellow')}>Light Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App