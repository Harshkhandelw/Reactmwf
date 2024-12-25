import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addUser } from "./Reducer"
function Adduser() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(state => state.x.Data)
  const navigate = useNavigate()
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Contact, setContact] = useState('')
  const [Address, setAddress] = useState('')
  useEffect(() => {
    if (id !== 'Null' && user.length > 0) {
      let obj = user.find((v) => {
        {
          return v.id == parseInt(id)
        }
      })
      console.log(obj)
      if (obj) {
        setName(obj.Name)
        setEmail(obj.Email)
        setAddress(obj.Address)
        setContact(obj.Contact)
      }
    }
  }, [id, user])
  async function AddData(e) {
    e.preventDefault()
    if (user.length === 0) {
      let obj = {
        id: 1,
        Name,
        Email,
        Contact,
        Address
      }
      const response = await axios.post('http://localhost:3003/User', obj);
      let res = await axios.get("http://localhost:3003/User");
      let data = res.data;
      dispatch(addUser({ data }));
      setEmail('')
      setName('')
      setAddress('')
      setContact('')
      navigate('/')
    }
    else {
      let arr = user.map((v) => {
        return v.id
      })
      let obj = {
        id: arr.length + 1,
        Name,
        Email,
        Contact,
        Address
      }
      const response = await axios.post('http://localhost:3003/User', obj);
      let res = await axios.get("http://localhost:3003/User");
      let data = res.data;
      dispatch(addUser({ data }));
      setEmail('')
      setName('')
      setAddress('')
      setContact('')
    }
    navigate('/')
  }
 async function UpdateData(e){ 
    e.preventDefault()
    let obj = {
      id: id,
      Name,
      Email,
      Contact,
      Address
    }
    const response = await axios.put(`http://localhost:3003/User/${id}`, obj);
    let res = await axios.get("http://localhost:3003/User");
    let data = res.data;
    dispatch(addUser({ data }));
    setEmail('')
    setName('')
    setAddress('')
    setContact('')
    navigate('/')
  }
  return (
    <>
      <form action="" onSubmit={(id !== 'Null') ? (e) => UpdateData(e) : (e) => AddData(e)}>
        <div>
          <div>Name</div>
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <div>Email</div>
          <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <div>Contact</div>
          <input type="text" value={Contact} onChange={(e) => setContact(e.target.value)} />
        </div>
        <div>
          <div>Address</div>
          <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <input type="submit" name="" id="" />
      </form>
    </>
  )
}
export default Adduser