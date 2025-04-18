import React from 'react' 
import { useDispatch,useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
   const todos = useSelector((state)=>state.todos)
   const dispatch= useDispatch()
    
  return (
   <>
   <div>todo</div>
   {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.text}
            <button
            onClick={()=>(
                dispatch(removeTodo(todo.id))
            )}
            >x</button>
        </li>
   ))}
   </>
  )
}

export default Todos