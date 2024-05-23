import React,{useState} from "react";


function AddName({onadd}) {
    const[name,setName]=useState("")
    return(
        <div id="contaner">
                  Enter name: <input type="text"
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                  />  
            <button onClick={()=>{
                onadd(name)
            }}><i class="fa-solid fa-plus"></i></button>
        </div>
    )
}
export default AddName