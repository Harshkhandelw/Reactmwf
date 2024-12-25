import { createSlice } from "@reduxjs/toolkit";

const xyz = createSlice({
    name: "abc",
    initialState : {
      Data : []
    },
    reducers : {
      addUser : (state,action)=>{
          state.Data = action.payload.data
      }
    }
})
export const {addUser} = xyz.actions;
 export default xyz.reducer;
