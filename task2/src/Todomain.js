import React,{useState} from 'react'
import AddName from "./Todoslist"
import Todotask from "./Todotask"

let index=4
function Todomain() {
    const[todos,setTodos]=useState([
        {name:"Harsh",id:1},
        {name:"vikas",id:2},
        {name:"vasu",id:3}
    ])
    const handelAddv =(name)=>{
        setTodos(
            [
                ...todos,{name:name,id:index++}
            ]
        )
    }
    const handelEdit=(nextData)=>{
setTodos(
    todos.map((v)=>{
        if(v.id==nextData.id){
            return nextData
        }else{
            return v
        }
    })
)
    }

    const handelDelete=(todosID)=>{
        setTodos(
            todos.filter((v)=>{
                return v.id !== todosID
            })
        )
    }
    return(
        <>
        <AddName onadd={handelAddv}/>
        <input type="checkbox"/>
            <label>AllSelect</label>
        <Todotask
        todos={todos}
        onchangeTodos={handelEdit}
        onDeleteTodos={handelDelete}
        />
        </>
    )
}


export default Todomain
