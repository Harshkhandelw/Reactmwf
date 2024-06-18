import React from "react"

export default function Listview() {
    const List = [
         {
             'name': 'I listen song',
             'id': 1
         },
         {
             'name': 'i am good at communication',
             'id': 2
         },
         {
             'name': 'i wana go home',
             'id': 3
         },
         {
             'name': 'i need to practice more',
             'id': 4
         }
     ]
     return (
         <>
           { 
            List.map((v)=>{
             return <li key={v.id} className="List">{v.name}</li>
            })   
           }
         </>
     )
 }
