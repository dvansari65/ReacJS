import React from 'react'
import Todoitem from './Todoitem'
function Todolist({todos=[],onDelete}) {
    
  return (
    <div>
        <ul className='w-full h-full'>
       {
        todos.map((todo,index)=>(
          <Todoitem
          key={index}
          text={todo}
          onDelete={()=>onDelete(index)}
          />
        ))
       }
        </ul>
    </div>
  )
}

export default Todolist;