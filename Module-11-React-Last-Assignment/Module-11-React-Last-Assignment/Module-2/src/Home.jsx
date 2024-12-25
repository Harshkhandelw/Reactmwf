import { useEffect } from "react"
import { addUser } from "./Reducer"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        async function Get() {
            let res = await axios.get('http://localhost:3003/User')
            let data = res.data
            dispatch(addUser({ data }))
        }
        Get()

    }, [dispatch, Delete])
    const user = useSelector(state => state.x.Data)

    async function Delete(id) {
        await axios.delete(`http://localhost:3003/User/${id}`);
    }
    function Add() {
        navigate('/Add/Null')
    }
    function Edit(id){
         navigate(`/Add/${id}`)
    }
    return (
        <>
            <div className="box">
            <button onClick={Add} className="btn1">Add Data</button>
            <table border={1} style={{
                width: '500px',
            }}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                {
                    user && user.map((v, i) => (
                        <tr key={i}>
                            <td>{v.Name}</td>
                            <td>{v.Email}</td>
                            <td>{v.Contact}</td>
                            <td>{v.Address}</td>
                            <td>
                                <button onClick={() => Delete(v.id)}>Delete</button>
                                <button onClick={()=> Edit(v.id)}>Edit</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </div>
        </>
    )
}

export default Home