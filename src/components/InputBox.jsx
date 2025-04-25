import React from 'react'
import { useState } from 'react'

function InputBox({onAdd}) {
    const [input,setInput] = useState("")

    const handleAdd=()=>{
      if (input.trim() !== '') {
        onAdd(input);
        setInput('');
      }
    }
  return (
    <div className='inputbox flex justify-center '>
        <input 
        className="input bg-amber-200 w-full text-black"

        type="text"
        value={input}
        placeholder="enter your task"
        onChange={(e)=>setInput(e.target.value)}
         />
         <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default InputBox