import React, { useState } from 'react'
import validator from 'validator'


const Validator = () => {
    const[errormsg, setErrormsg]=useState("")

    const validate = (value)=>{
       if(validator.isStrongPassword(value,{
        minLength : 8,minLowercase:1,minNumbers:1,minSymbols:1,minUppercase:1
       })){setErrormsg(<span style={{color:'green'}}>"Your Password is Strong"</span>)}
       else{
        setErrormsg(<span style={{color:'red'}}>"Your Password is not Strong"</span>)
       }
    }

  return (
   <>
   <div>
   <h1>Checking Your Password Strength</h1>
   <label>Enter Your Password :</label>
   <input type="text" onChange={(e)=>validate(e.target.value)} />

   <h2>{errormsg}</h2>

   <p>your password must be min 8 characters, min 1 lowercase, min 1 uppercase, min 1 symbol and min 1 number</p>
   </div>
   </>
  )
}

export default Validator