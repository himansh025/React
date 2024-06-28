import { createSlice } from "@reduxjs/toolkit";

 const initialState ={
value: 1,
 }
export const counterslicer = createSlice({
     initialState,
    name : "counter",
    reducers : {
        incrementcounter: (state)=> {state.value+=1},
        decrementcounter: (state)=>{ state.value-=1},
    }

}); 

export const { incrementcounter,decrementcounter} = counterslicer.actions
export default  counterslicer.reducer