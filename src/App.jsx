import { useEffect, useState } from 'react'
import '../src/assets/round.css'
import './App.css'

function App() {

  const [enabled, setEnabled] = useState(false)
  const [position,setPosition] = useState({ x: 0, y: 0})

  useEffect (() => {

    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log({clientX, clientY});
      setPosition({x: clientX, y:clientY})
    }
    if(enabled){
      window.addEventListener('pointermove',handleMove)
    }
    
    return () => {
      window.removeEventListener('pointermove',handleMove)
    }
  },[enabled])

  return (
    <>
    <main>
      <div className='round' style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </main>
    </>
  )
}

export default App
