import {updateTodo, deleteTodo} from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'
import { GoCheck } from "react-icons/go"
import { FaTimes } from "react-icons/fa"

const Todo = ({ todo }) => {

    const dispatch = useDispatch()
    const handleUpdate = () => {
        dispatch(updateTodo(todo))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo._id))
    }

  return (
    <div className='w-full h-14 border rounded-md flex justify-between items-center px-5'>
        <span className={todo.completed ? "text-gray-500 line-through text-xl font-semibold" :'text-xl font-semibold'}>{todo.title}</span>
        <div className='flex items-center gap-x-3'>
            <button onClick={handleUpdate} className='bg-green-400 p-2 rounded-full'>
                <GoCheck size={"1.5em"} color={"white"}/> 
            </button>
            <button onClick={handleDelete} className='bg-red-400 p-2 rounded-full'>
                <FaTimes size={"1.5em"} color={"white"}/>
            </button>
        </div>
    </div>
  )
}

export default Todo