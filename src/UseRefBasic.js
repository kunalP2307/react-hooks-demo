import { useState, useRef, useEffect } from "react";

// useRef is same as useState 
// but it does not trigger re-render

const UseRefBasic =()=>{

    const refContainer = useRef(null);

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(refContainer.current.value)
    }

    console.log(refContainer);

    return(
        <>
            <form className="form">
                <div>
                    <input type = "text" ref = {refContainer}/>
                    <button type = "submit  " onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </>
    )
}

export default UseRefBasic;