import React from 'react'
import image from './../Images/logo.png'
import Form from './../Images/background.png'
import google from './../Images/google.png'
import group from './../Images/modal2.png'
import balance1 from './../Images/balance1.png'
import balance2 from './../Images/balance2.png'
import vector1 from './../Images/Vector(1).png'
import vector2 from './../Images/Vector(2).png'
import vector3 from './../Images/Vector(3).png'
import vector4 from './../Images/Vector(4).png'
import vector5 from './../Images/Vector(5).png'
import vector6 from './../Images/Vector(6).png'
import rectangle from './../Images/rectangle.png'
import ellipse from './../Images/ellipse.png'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import title from './../Images/title.png'
import body from './../Images/body.png'
const SignIn = () => {
    const [mobile,setMobile]=useState(window.innerWidth<851);
    const [dimensions,setDimensions]=useState({
      width:window.innerWidth,
      height:window.innerHeight
    })
    const handleResize=()=>{
         setDimensions({
          width:window.innerWidth,
          height:window.innerHeight
         }) ;
    }
    useEffect(()=>{
      window.addEventListener("resize",handleResize,false);
      dimensions.width>851?setMobile(true):setMobile(false);
    },[dimensions.width]);

    
    return (
        <div>
            <div id="form">
                <img alt="logo" src={image} style={{marginTop:'2vh'}}height='40' width='150'></img>
                <div id="submit">
                <div className="heading"><h1 >Sign In to Overpay</h1>
                    
                    <br/>
                    <p>Send,spend and save smarter</p>
                   </div>
                    <button  id="social">
                        <img alt="logo" src={google} height='20' width='20'></img>
                        {mobile&&<p>Sign In with Google</p>}   
                    </button>
                    
                    
                    <div ><p id="strike">{mobile?<span>Or with email</span>:<span>or</span>}</p></div>

                    <div style={{marginTop:'50px'}} className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div id="link">
                    <div id="line" className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                    </div>
                    
                        <Link id="forgot" to="/">Forgot Password?</Link>
                    </div>
                    <div id="sign">
                        <button type="button" id="wideBtn" className="btn btn-primary">Sign-In</button>
                    </div>
                    <br />
                    <div  className="heading" id="sign">
                        <span>Don't Have an Account?<Link id="signup" to="/SignUp">SignUp</Link></span>
                    </div>

                </div>
                <div id="footer">
                    <p id="first">Privacy Policy</p>
                    <p id="second">Copyright 2022</p>
                </div>
            </div>

           { mobile&&<div id="send" style={{ backgroundImage: `url(${Form})` }}>
                <div id="vector1" >
                     <img src={vector1} height='100%' width='100%'/>
                </div>
                <div id="group" >
                    <img src={group} height='100%' width='100%'/>
                </div>
                <div id="balance1" >
                    <img src={balance1} height='100%' width='100%'/>
                </div>
                <div id="balance2" >
                    <img src={balance2} height='100%' width='100%'/>
                </div>
                <div id="vector5" >
                     <img src={vector5} height='100%' width='100%'/>
                </div>
                <div id="vector6" >
                     <img src={vector6} height='100%' width='100%'/>
                </div>
                <div id="vector2" >
                     <img src={vector2} height='100%' width='100%'/>
                </div>
                <div id="vector3" >
                     <img src={vector2} height='100%' width='100%'/>
                </div>
                <div id="vector41" >
                     <img src={vector2} height='100%' width='100%'/>
                </div>
                <div id="balance3" >
                    <h1>Get better with Money</h1>
                </div>
                <div id="balance4" >
                    <p>
                        Overplay helps you reach your saving goals,earn cash back offers,Go to disclaimer
                        for more details and get paychecks up to two days early.Get a <small>$20 </small>
                        bonus when you receive qualifying direct deposits
                    </p>
                </div>
                <div id="vector4" >
                     <img src={vector4} height='100%' width='100%'/>
                </div>
                <div id="pagination">
                <div id="rectangle" >
                    
                </div>
                <div id="ellipse" >
                    
                </div>
                <div id="ellipse" >
                  
                </div>
                </div>
            </div>}
            
        </div>
    )
}

export default SignIn