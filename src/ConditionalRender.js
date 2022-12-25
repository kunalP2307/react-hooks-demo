import { useState, useEffect } from "react";

const CondnRender =()=>{
    const[value, setValue] = useState(false);
    if(value){
        return(
            <h2>If Truee</h2>
        )
    }
    else{
        return(
            <h2>If False</h2>
        )
    }
}

export default CondnRender;