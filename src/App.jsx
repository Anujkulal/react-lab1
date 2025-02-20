import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState(0)

  return (
    <>
      <div className="App bg-gray-600 rounded-3xl p-4">
        <h4>Text Count: {text.length}</h4>
        <input className='p-2 m-2 outline-1 rounded-3xl' type="text" placeholder='Type something...' value={text} onChange={(e) => setText(e.target.value)}/>
        <h3><strong>You Typed: <span className='underline'>{text}</span></strong></h3>
      </div>
    </>
  )
}

export default App
