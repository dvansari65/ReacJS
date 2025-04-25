
import { useState } from 'react'
import InputBox from './components/InputBox'
import Todoitem from "./components/Todoitem"
import Todolist from "./components/Todolist"

function App() {
     const[todos,setTodos] = useState([])

       const addTodo = (newtodo)=>{
        setTodos([...todos,newtodo])
       }
       const handleDelete = (index)=>{
          const updatedTodoList =   todos.filter((_,i)=>i !== index)
          setTodos(updatedTodoList)
       }
      
  return (
    < >
    <div >
    <InputBox  onAdd={addTodo}/>
    <Todolist todos={todos} onDelete={handleDelete} />
    </div>
    </>
  )
}

export default App
