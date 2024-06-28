import { createSlice } from '@reduxjs/toolkit'


 const initialState = {
   queries: [ ]

   
}
const query = createSlice({
    initialState,
    name :"query",
    reducers :{
        addquery: (state,action)=>{
const {text} = action.payload
state.queries.push(text);
// console.log(query.text);
        },
        removequery:(state,action)=>{
           const  {text} = action.payload
 state.queries=  state.queries.filter((item) => item.text !== text )

        },
    }
});
export const {addquery,removequery} =  query.actions;
export default query.reducer 