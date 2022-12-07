import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { addNewTodo } from '../features/todo/todoSlice'

const TodoInput = () => {

    const dispatch = useDispatch()
    const [todo, setTodo] = useState({
        title: "",
        description: "",
        completed: false
    })

    const handleAdd = (e) => {
        if(todo.title !== "") {
            dispatch(addNewTodo(todo))
        setTodo({...todo, title: ""})
        }
        
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter' && todo.title !== "") {
            dispatch(addNewTodo(todo))
            setTodo({...todo, title: ""})
          }
    }
  return (
    <div className='w-4/6 flex relative py-3'>
        <input className='w-full py-2 outline-none rounded-xl border flex-shrink-0 px-3' placeholder="Type a todo" value={todo.title} onChange={(e) => {setTodo({...todo, title: e.target.value})}} onKeyDown={handleEnterKey}/>
        <button onClick={handleAdd}  className='px-3 py-2 border rounded-r-xl text-white font-semibold bg-sky-300 absolute right-0'>add</button>
    </div>
    
  )
}

export default TodoInput