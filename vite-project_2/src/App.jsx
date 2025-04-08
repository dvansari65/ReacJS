
import react, { useCallback, useEffect, useState,useRef } from 'react'
function App() {
  const [length,setLength] = useState(8)
  const [isNumber,setNumber] = useState(false)
  const [isChar, setChar]=useState(false)
  const [password,setPassword] = useState("")
  
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTRUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumber)str += "0123456789"
    if(isChar) str +="!@#$%^&*(){}[]<>?>."
    for (let i = 0; i < length; i++) {
       let char = Math.round(Math.random()*str.length+1)
       pass += str.charAt(char)
      }
      setPassword(pass)
  } , [length,isNumber , isChar,setPassword])
const passwordRef = useRef(null)
const copyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange();
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator()
},[length,isChar,isNumber,passwordGenerator])

  


  return (
    <>
    <div className=' fixed inset-x-0 top-8 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'><h1 className='text-white text-center my-3'>password generator</h1><div className='flex shadow rounded-lg overflow-hidden mb-4'>
     <input type="text" 
     min={8}
     max={40}
    value={password}
    className='outline-none bg-amber-300 w-full py-1 px-3' placeholder='password'
    ref={passwordRef}
    readOnly/>
     <button 
     className='outline-none bg-blue-700   text-white px-3 py-0.5 shrink-0'
     onClick={copyPasswordToClipBoard}
     >copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
         value={length}
          className='cursor-pointer'
          onChange={(e)=>
            setLength(e.target.value)
          }  />
        <label >length:{length}</label>
      </div>
      <div>
      <input type="checkbox"
         defaultChecked={isNumber}
         id="numberInput"
          className='cursor-pointer'
          onChange={(e)=>{
            setNumber((prev)=>!prev)
          }}  />
        <label htmlFor='numberInput'>number</label>
      </div>
      <div>
      <input type="checkbox"
         defaultChecked={isChar}
         id="charInput"
          className='cursor-pointer'
          onChange={(e)=>
            setChar((prev)=>!prev)
          }  />
        <label htmlFor='charInput'>character</label>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
