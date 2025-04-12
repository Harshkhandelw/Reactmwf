import { configureStore } from "@reduxjs/toolkit";
import usereducer from "./usereducer";


export const store= configureStore({
    reducer:{
        count: usereducer
    }
})