import { configureStore} from "@reduxjs/toolkit";
import reducer from "./Reducer";
const store = configureStore({
     reducer : {
         x: reducer
     }
})
export default store