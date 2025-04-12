import { type } from "@testing-library/user-event/dist/type"

export const inc=()=>{
    return{type:"increment"}
}
export const dec=()=>{
    return{type:"decrement"}
}
export const reset=()=>{
    return{type:"reset"}
}