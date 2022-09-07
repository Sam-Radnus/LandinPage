import React from 'react'
import Navbar from './Navbar'

import { useNavigate } from 'react-router-dom';
const Need = () => {
  const navigate=useNavigate();
  return (
    <div>
       <Navbar/>
       <div id="center">
       <h1>Need help with your account</h1>
       <div style={{textAlign:'center',width:'450px'}}>
       <p>Enter the E-Mail Address associated with your account and we will send you a link to reset your password</p>
       <div  className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
       </div>
      <button style={{width:'450px'}} onClick={()=>{
        navigate('/LoggedIn')
      }}>Send Link</button>
       <b>Forgot your email?</b>
      </div>
      <div id="footer2">
                    <p  style={{width:'max-content'}} id="first">Privacy Policy</p>
                    <p  style={{width:'max-content'}} id="second">Copyright 2022</p>
                </div>
    </div>
  )
}

export default Need