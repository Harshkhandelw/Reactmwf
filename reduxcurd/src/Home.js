import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const emp = useSelector((state) => state.x);
//   console.log(emp);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div>
                
              <h1>View Employees</h1>
            </div>
            <div>
              <Link to='/add-user' className="btn btn-primary">Add New</Link>
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
              <tbody>{emp.map((v)=>(                
                <tr>
                  <th scope="row">{v.id}</th>
                  <td>{v.name}</td>
                  <td>{v.email}</td>
                  <td>
                  <button className="btn btn-info">View</button>
                  <button className="btn btn-success mx-2">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
