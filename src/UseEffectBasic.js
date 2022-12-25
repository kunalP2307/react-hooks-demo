import { useState,useEffect } from "react";

const useEffectBasic =()=>{

    const[value, setValue] = useState(0);

    // we can't use conditions with hooks 
    // i.e if value == 2 then only render etc
    
    useEffect(()=>{
        document.title = `New Message(${value})`;
    },
    // if dont want to render from 2nd time ownwords pass second parameter
    [value])

    return(
        <>
            <div><h2>helllo {value}</h2></div>
            <button onClick={()=>{
                setValue(value+1)
            }}> Increase</button>
        </>
    )

}

export default useEffectBasic;