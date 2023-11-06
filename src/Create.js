import React from 'react' ;
import axios from 'axios' ;
import { useState } from 'react';
function Create() {
  const[task,setTask] = useState() ;

  const addToDo =()=>{
     axios.post('http://127.0.0.1:5000/add',{task:task}).then(result =>console.log(result)).catch(
        err=>console.log(err) 
     )
  }
  return (
    <div className='create_form'>
         <input type="text" name="" id="" placeholder='Enter your Task' onChange={(e)=>setTask(e.target.value)}/>
         <button type="button" onClick={addToDo}>Add</button>
    </div>
  )
}

export default Create