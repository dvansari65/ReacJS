import react, { useState } from 'react'

function App() {
    let [color,setColor] = useState("red")
       
    
  return (
    <>
    <div className='flex h-screen w-full ' style={{backgroundColor:color}}><div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-3"><div className='flex flex-wrap justify-center gap-3 bg-white  px-5 py-2 text-2xl  rounded-2xl  '><button onClick={()=>setColor("red")} className='bg-red-500 rounded-2xl text-white px-3 py-1' >red</button>
    <button className="bg-yellow-500 rounded-2xl text-white px-3 py-1" onClick={()=>setColor("yellow")}>yellow</button>
    <button onClick={()=>setColor("green")} className="bg-green-500 rounded-2xl text-white px-3 py-1">olive</button>
    <button onClick={()=>setColor("blue")} className="bg-blue-500 rounded-2xl text-white px-3 py-1">blue</button>
    </div></div></div>
    
    </>
  )
}

export default App
