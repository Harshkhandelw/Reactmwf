import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function View(){
     const {id} = useParams()
     const [state,setState]= useState({})
       useEffect(()=>{
        async function Data(){
            const res =  await axios.get('http://localhost:3003/Users');
            const data = res.data
           let obj = data.find((v)=>{
                 return v.id == id
            })
            setState(obj)
        }
        Data()
       },[id])
     return(
     <>
         <div>
            <div>{state && state.Name}</div>
            <div>{state && state.LastName}</div>
            <div>{state && state.Email}</div>
         </div>
     </>
     )
}
export default View