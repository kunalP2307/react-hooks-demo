import {data} from './data';
import React,{useState} from 'react';

const UseStateArray =()=>{
  
    const[student,setStudent] = useState(data);
    return (
        <>
            <h2>Use State Array</h2>
            {
                student.map((stud)=>{
                    const{id,name} = stud;
                    return(
                        <div key = {id}>
                            <h3>{name}</h3>
                            <button onClick = {()=> { setStudent([]) }}>Remove </button>
                        </div>
                    )
                })
            }
            <hr></hr>
            <button onClick = {()=> { setStudent([]) }}>Remove All</button>
        </>
      
    )
}

export default UseStateArray;