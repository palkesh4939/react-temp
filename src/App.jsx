import React, { useState } from 'react'
import './App.css'

function App() {
  const [color , setcolor] = useState(false);

  return (
    <div>
        <h1 onClick={()=> setcolor(!color)} className={color ? "active" : ""}>Palkesh</h1>
    </div>
  )
}

export default App
