import React,{useState} from 'react'

function Todotask({todos,onchangeTodos,onDeleteTodos}) {
  return (
    <div>
      {todos.map((v)=>(
        <li key={v.id}>
            <Task
            todos={v}
            onchange={onchangeTodos}
            onDelete={onDeleteTodos}
            />
        </li>
      ))}
    </div>
  )
}
function Task({todos,onchange,onDelete}) {
    const[edit,setEdit]=useState(false)
    let content 
    if (edit) {
        content=<>
        <input type="text" 
        value={todos.name}
        onchange={(e)=>{
            onchange({
                ...todos,
                name:e.target.value
            })
        }}
        />
        <button onClick={()=>{setEdit(false)}}><i class="fa-solid fa-floppy-disk"></i></button>
        </>
    }else{
        content=<>
        {todos.name}
        <button onClick={()=>{setEdit(true)}}><i class="fa-regular fa-pen-to-square"></i></button>
        </>
    }
    return(
        <>
        {content}
        <button onClick={()=>{onDelete(todos.id)}}><i class="fa-solid fa-trash"></i></button>
        </>
    )
}

export default Todotask
