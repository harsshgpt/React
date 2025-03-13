import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Harsh from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name:"Harsh",
    age : 25,
    class : 7,
  }
  return (
    <>
     <Harsh name = "harsh gupta" detail = {myobj}/>
     <Harsh/>
     
    </>
  )
}

export default App
