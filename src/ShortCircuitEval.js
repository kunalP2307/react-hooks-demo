import React,{useState, useEffect} from "react";

const ShortCircuit =()=>{
    
    const[text, setText] = useState('Blockchain');
    const[isError, setError] = useState(false);
    
    const firstVal = text || "Some text";
    const secondVal = text && "Some other text";

    return (
        <>
            {/* <h2>{firstVal}</h2>
            <h2>value : {secondVal}</h2> */}
            {/* <h1> {text || 'Or'}</h1> */}
            <button onClick={
                ()=>setError(!isError)
            }>Toggle Error</button>
            
            <h1> {isError && 'And'}</h1>
            <h1> {isError ? 'if true' : 'if false' }</h1>
            {/* <h1> {!text && 'not'}</h1> */}
            
            

        </>
    )
}

export default ShortCircuit;