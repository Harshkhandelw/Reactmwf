import { createSlice } from "@reduxjs/toolkit";
let z = 1;
const xyz = createSlice({
     name : "count",
     initialState : {z},
     reducers : {
        Plus : (state,action)=>{
            state.z = state.z+1
        },
        Minus : (state,action)=>{
            state.z = state.z-1
        }
     }

})
export default xyz.reducer
export const {Plus,Minus} = xyz.actions