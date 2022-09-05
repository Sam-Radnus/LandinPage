import React from 'react'
import Navbar from './Navbar'
import OtpInput from 'react-otp-input';
import { useState } from 'react'
const LoggedIn = () => {
  const[state,setState]=useState()
  const handleChange = (otp) => setState(otp);
  return (
    <div>
       <Navbar/>
       <div id="center">
       <h1>Hi John Doe!</h1>
       <p>You're Logged In,Well Done</p>
       <button>Log Out</button>
      </div>
      <div id="footer2">
                    <p style={{width:'10vw'}} id="first">Privacy Policy</p>
                    <p style={{width:'10vw'}} id="second">Copyright 2022</p>
                </div>
    </div>
  )
}

export default LoggedIn