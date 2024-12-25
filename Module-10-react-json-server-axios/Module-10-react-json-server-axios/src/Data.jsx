import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

let id = 1;
function Edit() {
  const { Id } = useParams()
  const naviagte = useNavigate()
  useEffect(() => {
    async function Get() {
      const res =  await axios.get('http://localhost:3003/Users');
      const data = res.data
      id = Number(data[data.length-1].id)+1
      id = String(id)
      if (Id !== "null") {
        let obj = data.find((v)=>{
            return Id == v.id
        })
        setName(obj.Name)
        setLastname(obj.LastName)
        setEmail(obj.Email)
      }
    }
    Get()
  }, [Id])
  const [Name, setName] = useState('')
  const [LastName, setLastname] = useState('')
  const [Email, setEmail] = useState('')
  async function PostData() {
    let obj = JSON.stringify({
      id,
      Name,
      LastName,
      Email
    })
    const res = await axios.post('http://localhost:3003/Users', obj, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setEmail('');
    setLastname('');
    setName('');
    naviagte('/')
  }
  async function PutData() {
    let obj = {
      id:(Id),
      Name,
      LastName,
      Email
    }
    const res = await axios.put(`http://localhost:3003/Users/${Id}`, JSON.stringify(obj), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setEmail('');
    setLastname('');
    setName('');
    naviagte('/')
  }
  return (
    <>
      <div className="box">
        <div className="Box-1"><label htmlFor="">Name : </label><input type="text" value={Name} onChange={(e) => setName(e.target.value)} /></div>
        <div className="Box-1"><label htmlFor="">Last Name : </label><input type="text" value={LastName} onChange={(e) => setLastname(e.target.value)} /></div>
        <div className="Box-1"><label htmlFor="">Email: </label><input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} /></div>
        <button className="Submit" onClick={(Id !== "null") ? PutData : PostData}>Submit</button>
      </div>
    </>
  )
}
export default Edit