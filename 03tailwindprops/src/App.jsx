import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Harsh from './components/card'

function App() {
  const [count, setCount] = useState(15)
  let addvalue = () =>{
    setCount( count+1)
    
  }
  let removevalue = () => {
    setCount( count-1)
  }
  return (
    <>
     <h1>Counter program</h1>
     <h1>{count}</h1>
     <div class = "buttons">
     <button onClick={addvalue}>Add Value</button>
     <button onClick={removevalue}>Remove Value</button>
     </div>
    </>
  )
}

export default App
