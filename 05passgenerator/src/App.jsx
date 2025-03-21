import { useState } from 'react'


function App() {
  const [Password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numallowd, setnumallowd] = useState(false) 
  const [charallowd, setcharallowd] = useState(false) 

  const passwordGenerator = () =>{}
  return (
  <>
  <h1 className='text-4xl  text-center text-white'>Password Generator</h1>
  </>
  )
}

export default App
