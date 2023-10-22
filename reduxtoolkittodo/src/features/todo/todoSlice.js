import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialstate={
    todas:[{id:1,text:"hellow"}]
}



export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(), 
                text:action.payload
            }
            state.todos.push(todo)
        
        
        
        },
        removeTodo:(state, action)=>{
           state.todas=state.todos.filter((todo)=>todo.
           id!== action.payload)

            
        },


        
    }
})

export const{addTodo,removeTodo}=todoslice.actions

export default todoSlice.reducer