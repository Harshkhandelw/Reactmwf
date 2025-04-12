import {createSlice } from "@reduxjs/toolkit";
import { employeeArr } from "./employess";



   

const xyz = createSlice({
    name:"emp",
    initialState:employeeArr,
    reducers:{
         addUsers:(state,action)=>{
            console.log(state)
            console.log(action.payload)

            state.push(action.payload)
         },
      
    }
})



export const {addUsers} = xyz.actions;

export default xyz.reducer;