import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState = {
    todos: [
        {
            id: 1, text :" content"
        }
    ]
}

export const todoslice = createSlice({
    name: " todo",
    initialState,
    reducers:{

        // state is def as the current state and action is def as the whatever the data pass
        
        addtodo: (state,action)=>{
            const {text} = action.payload;
            const id = state.todos.length>0 ? state.todos[state.todos.length - 1].id + 1 : 1;
            console.log("text : ",text)
            console.log("id:",id)

            const todo = {
                id,
                text 
            }  
            console.log("todo : " , todo)
            console.log(todo);
           state.todos.push(todo); 
        },
        removetodo:(state,action)=>{
            state.todos= state.todos.filter((todoid)=>todoid.id !== action.payload
            )
        },
        updatetodo : (state,action)=>{
            const {id,text}= action.pa
            yload
         const todo =state.todos.find((todo)=>todo.id === action.payload)
      if(todo){
todo.text= text;
      }
        

        }
    },
})

export const { addtodo,removetodo,updatetodo} = todoslice.actions
export default todoslice.reducer