import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer";
const StoreData = configureStore({
     reducer : {
          x : reducer
     }
})
export default StoreData