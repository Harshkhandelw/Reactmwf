import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "./reducer";
import { useNavigate } from "react-router-dom";

let i=4;
function AddNewUser() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
   const dispatch = useDispatch();
   const navigate = useNavigate();

    const handleSubmit = (e)=>{

        e.preventDefault();
        console.log(name,email)

        dispatch(addUsers({id:i++,name,email}))

        navigate('/')

    }
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div>
              <h1>View Employees</h1>
            </div>
            <div>
              <button className="btn btn-primary">Add New</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
            
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewUser;
