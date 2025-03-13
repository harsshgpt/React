import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-50rem bg-white px-3 py-2 rounded-xl  ">
        <button onClick={()=>{setColor("red")}} 
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>{setColor("Green")}}  
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Green"}}>Green</button>
        <button onClick={()=>{setColor("Blue")}} 
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Blue"}}>Blue</button>
        <button onClick={()=>{setColor("Yellow")}} 
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Yellow"}}>Yellow</button>
        <button onClick={()=>{setColor("Pink")}} 
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Pink"}}>Pink</button>
        <button onClick={()=>{setColor("Teal")}} 
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Teal"}}>Wheat</button>
        <button onClick={()=>{setColor("Wheat")}} 
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Wheat"}}>Wheat</button>
        <button onClick={()=>{setColor("aqua")}} 
        className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"aqua"}}>aqua</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
