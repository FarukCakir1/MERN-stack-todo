import Todo from "./Todo";
import TodoInput from "./TodoInput";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAll } from "../features/todo/todoSlice";

const Todos = () => {

    const {todos} = useSelector(state => state.todo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAll())
    }, [todos, dispatch])

  return (
    <div className="w-3/6 h-4/6 border bg-wihte shadow-md mx-auto px-5 flex flex-col items-center">
      <TodoInput />
      <div className="w-full h-full flex flex-col items-start gap-y-5">
        {todos.map(todo => (<Todo key={todo._id} todo={todo}/>))}
      </div>
    </div>
  );
};

export default Todos;
