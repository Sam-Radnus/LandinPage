import React from 'react'
import Navbar from './Navbar'
import OtpInput from 'react-otp-input';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Need = () => {
  const navigate=useNavigate();
  return (
    <div>
       <Navbar/>
       <div id="center">
       <h1>Verify Your E-Mail</h1>
       <div style={{textAlign:'center',width:'25vw'}}>
       <p>Enter the E-Mail Address associated with your account and we will send you a link to reset your password</p>
       <div  className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
       </div>
      <button onClick={()=>{
        navigate('/LoggedIn')
      }}>Send Link</button>
       <b>Forgot your email?</b>
      </div>
    </div>
  )
}

export default Need