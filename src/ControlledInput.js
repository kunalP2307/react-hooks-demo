import React, {useState, useEffect} from "react";

const ControlledInput =()=>{

    const[firstName,setFirstName] = useState('');
    const[email,setEmail] = useState('');

    const handleSubmit =(e)=>{

        e.preventDefault();
        console.log("submitted")
    }
    return(
        <>
            <h1>Form</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control"> 
                <label htmlFor="firstName">Name : </label>
                    <input type='text' id = 'firstName'
                     name = 'firstName' value = {firstName}
                     onChange = {(e)=>
                        setFirstName(e.target.value)
                    }/>
                </div>

                <div className="form-control"> 
                <label htmlFor="email">Email : </label>
                    <input 
                     type='email' id = 'email' 
                     name = 'email' value = {email}
                     onChange = {(e)=>
                        setEmail(e.target.value)
                    }/>
                </div>

                <button type = 'submit'>Add</button>
            </form>
        </>
    )
}

export default ControlledInput;