import { useState,useCallback,useEffect } from 'react'


function App() {
  const [Password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numallowd, setnumallowd] = useState(false) 
  const [charallowd, setcharallowd] = useState(false) 

  const passwordGenerator = useCallback(() =>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowd) str+="0123456789"
    if(charallowd) str += "!@#$%^&*(){}~`'"
    for(let i = 1; i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  
    
       
  },[length,numallowd,charallowd,setPassword])
  useEffect(()=>{passwordGenerator()},[length,numallowd,charallowd,passwordGenerator])


  return (
  <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className=' text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
      <input type="text"
      value={Password}
      className='outline-none w-full py-1 px-3 '
      placeholder='Password'
      readOnly
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setLength(e.target.value)}
        

        />
        <label > Length:{length}</label>
      </div>
      <div className='flex item-center gap-x-1'>
        <input 
        type = "checkbox"
        defaultChecked = {numallowd}
        id = "numberInput"
        onChange={() =>{
          setnumallowd((prev) => !prev);
        }}
         />
         <label htmlFor="">Number</label>
      </div>
      <div className='flex item-center gap-x-1'>
        <input 
        type = "checkbox"
        defaultChecked = {charallowd}
        id = "charInput"
        onChange={() =>{
          setcharallowd((prev) => !prev);
        }}
         />
         <label htmlFor="">Charecter</label>
      </div>
    </div>
  </div>
  
  </>
  )
}

export default App
