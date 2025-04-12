import React from 'react'

function usereducer(state = 0,action) {
   
        switch (action.type) {
            case "increment":
                return state+1;    
            case "decrement":
                return state-1;
            case "reset":
                return state=0;
        
            default:
                return state; 
        }
    }


 export default usereducer
