import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getAll = createAsyncThunk("todos/getAll", async () => {
    const {data} = await axios.get("http://localhost:5000/todos")
    return data
})

export const addNewTodo = createAsyncThunk("todo/addNewTodo", async (todo) => {
    const response = await axios.post("http://localhost:5000/todos", todo)
    return response.data
})

export const updateTodo = createAsyncThunk("todo/deletetodo", async (todo) => {
    const response = await axios.post(`http://localhost:5000/todos/${todo._id}`, todo)
    return response.data
})

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
    const response = await axios.post(`http://localhost:5000/todos/delete/${id}`)
    return response.data
})

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    extraReducers: (builder) =>  {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.todos = action.payload
            })
           
           
    }
    

})


export default todoSlice.reducer;