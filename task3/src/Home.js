import React,{useEffect,useState} from 'react'
import{Link,useNavigate}from "react-router-dom"

function Home() {
    const[x,setX]=useEffect("")
    const nav=useNavigate();
    useEffect(()=>{
        fetch('http://localhost:3698/detials')
        .then((res)=>{return res.json()})
        .then((data)=>{setX(data)})
    },[])
    const handelView=(dekho)=>{
// console.log(dekho);
nav(`/view-user/${dekho}`)
    }

    const handleDelete=()=>{}

    
  return (
    <div>
    
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div>
            <h1>JSON CRUD</h1>
          </div>
          <div>
            <Link to='/add-user' className="btn btn-warning my-2">Add New student</Link>
          </div>
          <table className="table">       
          <thead>     
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Handle</th>
              </tr>  
              </thead>  
              <tbody>       
              {x && x.map((v)=>{
                return(
                  <tr key={v.id}>
                  <th scope="row">{v.id}</th>
                  <td>{v.name}</td>
                  <td>{v.email}</td>
                  <td>
                    {/* <Link to='/view-user/${v.id}' className="btn btn-info">View</Link> */}
                    <button onClick={()=>{handelView(v.id)}} className="btn btn-info">View</button>
                    <Link to={`/edit-user/${v.id}`}  className="btn btn-success mx-3">Edit</Link>
                    <button onClick={()=>{handleDelete(v.id)}} className="btn btn-danger">Delete</button>
                    </td>
                </tr>  
                )
              })}   
              </tbody>             
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
