import React, { useEffect } from 'react'
import Create from './Create'
import { useState } from 'react'
import axios from 'axios';
import {BsCircleFill, BsFillTrashFill} from 'react-icons/bs'

function Home() {
  const [todos,setTodo] =useState([]);
 
  useEffect(()=>{
    axios.get('http://localhost:5000/get').then(
        result => setTodo(result.data)).catch(err => console.log(err))
  });

  const handleRemove = ()=>{
    
  }
  return (
    <div className='Home'>
        <h2> ToDo List</h2>
        <Create/>
        {
            todos.length === 0 ? 
            <div>
                <h2>No Record Found</h2>
            </div>
            :
            todos.map(todo =>(
                <div className='task'>
                
                     
                        <p>{todo.task}</p>     
        
                   <div>
                       <span><BsFillTrashFill className='icon' onClick={handleRemove}/></span>
                   </div>
                </div>
            ))
           
        }
    </div>
  )
}

export default Home