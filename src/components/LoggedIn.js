import React from 'react'
import Navbar from './Navbar'


const LoggedIn = () => {
  
 
  return (
    <div>
       <Navbar/>
       <div id="center">
       <h1>Hi John Doe!</h1>
       <p>You're Logged In,Well Done</p>
       <button>Log Out</button>
      </div>
      <div id="footer2">
                    <p style={{width:'max-content'}} id="first">Privacy Policy</p>
                    <p style={{width:'max-content'}} id="second">Copyright 2022</p>
                </div>
    </div>
  )
}

export default LoggedIn