import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";


export const store123 = configureStore({
    reducer:{
        x:reducer
    }
})