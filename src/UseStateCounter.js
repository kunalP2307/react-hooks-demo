import React from "react";

const UseStateCounter =()=>{

    const [value, setValue] = React.useState(0);
    return( 
        <>
            <section>
                <h2>Counter : {value}</h2>
                <button onClick={()=>{
                    setValue(value + 1)
                }}>Increment</button>
                <button onClick={()=>{
                    setValue(value - 1)
                }}>Decrement</button>
                <button onClick={()=>{
                    setValue(0)
                }}>Reset</button>
            </section>
        </>
    );

}
export default UseStateCounter;