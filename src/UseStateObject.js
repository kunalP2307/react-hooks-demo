import React,{useState} from "react";

const UseStateObject =()=>{

    const[object,setObject] = useState({
        id : 76,
        name : 'Kunal',
        age : 28
    });

    const changeAge =()=>{
        setObject({
            // id : 76,
            // name : 'Kunal',
            // age : 20
            ...object, age : 20
        })
    }
    
    return(
        <div>
            <h2>Use State Object Example</h2>
            <hr></hr>
            <h3>{object.id}</h3>
            <h3>{object.name}</h3>
            <h3>{object.age}</h3>
            <button onClick= {changeAge}> Change Age</button>
        </div>
    )
}

export default UseStateObject;