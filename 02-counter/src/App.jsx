import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter ,setCounter] = useState(15);
  function addValue (){
     counter++;
     setCounter(counter)
  }
  function remove (){
    if(counter>=1){
    counter -=1;
    setCounter(counter);}
    
  }
  return (
 
   <>
   <h1>Chai aur react {counter}</h1>
   <h2>Counter value : {counter}</h2>
   <button
   onClick={addValue}>Add Value</button>
   <br/>
   <hr/>
   <button onClick={remove}>Remove Value</button>
   </>
  )
}

export default App
