import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Home(){
      const [state,setState] = useState([])
      const navigate = useNavigate()
    useEffect(()=>{
      const Getdata = async() => {
         const res =  await axios.get('http://localhost:3003/Users');
         const data = res.data
         setState(data)
      }
      Getdata()
       },[Delete])
      function Add(){
           navigate('/Add/null')
      }
      function Update(ID){
           navigate(`/Update/${ID}`)
      }
      async function Delete(id){ 
         if(id > 1){
            const res =  await axios.delete(`http://localhost:3003/Users/${id}`)
         } 
      }
      function View(id){
         navigate(`/View/${id}`)
      }
     return(
        <>
          <div className="container">
              <button onClick={Add} className="btn bg-color3">Add Data</button>
               <table>
                  <thead>
                  <tr>
                     <th className="w-1">First Name</th>
                     <th className="w-1">Last Name</th>
                     <th className="w-1">User Email</th>
                     <th className="w-2">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                     state.map((v,i)=>{
                           return(
                           <tr key={i}>
                              <th>{v.Name}</th>
                              <th>{v.LastName}</th>
                              <th >{v.Email}</th>
                              <th className="w-2">
                                  <button onClick={()=>Update(v.id)} className="btn bg-color1">Update</button>
                                  <button onClick={()=>Delete(v.id)} className="btn bg-color2">Delete</button>
                                  <button onClick={()=>View(v.id)} className="btn bg-color1">View</button>
                              </th>
                           </tr>
                           )
                     })
                  }
                  </tbody>
               </table>
          </div>
        </>
     )
}
export default Home