import { useState, useEffect } from "react";

const UseEffectCleanUp =()=>{

    const[sixe, setSize]  = useState(window.innerWidth);
    
    const reSize =()=>{
        setSize(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize',reSize)
    })
    return(
        <>
            <h2>Scren Size : {sixe} px</h2>
        </>
    )

}

export default UseEffectCleanUp;