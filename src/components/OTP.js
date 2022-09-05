import React from 'react'
import Navbar from './Navbar'
import OtpInput from 'react-otp-input';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const OTP = () => {
  const[state,setState]=useState()
  const navigate=useNavigate();
  const handleChange = (otp) => setState(otp);
  return (
    <div>
       <Navbar/>
       <div id="center">
       <h1>Verify Your E-Mail</h1>
       <div style={{textAlign:'center'}}>
       <p>We have sent code to your E-Mail</p>
       <b>alexa****@gmail.com</b>
       </div>
       <OtpInput
        value={state}
        isInputNum={true}
        onChange={handleChange}
        numInputs={5}
        containerStyle={{height:"10vh",padding:'12px',width:'fit-content'}}
        inputStyle={{height:'6vh',width:'3vw',borderRadius:'5px',borderWidth:'1px'}}
        focusStyle={{borderColor:'blue',borderWidth:'1px'}}
        separator={<span>-</span>}
      />
      <button onClick={()=>{
        navigate('/Need')
      }}>Verify Account</button>
      <p><span>Resend Code in:</span><b>59:00</b></p>
      </div>
    </div>
  )
}

export default OTP