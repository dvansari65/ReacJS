import React from 'react'

function Todoitem({text,onDelete}) {
  return (
    
        <li className='w-full m-3 p-2 '>
            {text}
            <button onClick={onDelete}>delete</button>
        </li>
   
  )
}

export default Todoitem