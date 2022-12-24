import './index.css';
import React,{useState} from "react";

const UseStateBasic =()=>{
    //text  = "Learning React is Easy";
    const [text,setText] = useState("Learning React is Easy");

    const changeText =()=>{
        setText("Learning React is Difficult")
    }
    return(
        <div>
            <h2>{text}</h2>   
            <button onClick={changeText}>Change</button> 
        </div>
    );
}

export default UseStateBasic