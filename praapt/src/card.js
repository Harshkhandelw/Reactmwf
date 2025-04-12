import { useEffect, useState } from "react"
const Fetchdatacomponent=()=>{
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
       .then(response=>response.json())
       .then(data=>setData(data))
        },[]);
        return(
            <div>
               {data.map((item)=>(
                <table key={item.id}>
                    <tr> id {item.id}</tr>
                    <tr> title {item.title}</tr>
                    <tr> price {item.price}</tr>
                    <tr>description {item.description}</tr>
                    <tr>category {item.category}</tr>
                    <tr><img src={item.image}></img></tr>
                </table>
               ))}
              
            </div>
        )
}
export default Fetchdatacomponent;