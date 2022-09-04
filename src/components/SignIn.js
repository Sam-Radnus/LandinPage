import React from 'react'
import image from './../Images/logo.png'
import Form from './../Images/background.png'
import google from './../Images/google.png'
import group from './../Images/modal2.png'
import balance1 from './../Images/balance1.png'
import balance2 from './../Images/balance2.png'
import { Link } from 'react-router-dom'
const SignIn = () => {
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
                        <p>Sign In with Google</p>   
                    </button>
                    
                    
                    <div ><p id="strike"><span>Or with email</span></p></div>

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
                    
                        <Link to="/">Forgot Password</Link>
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
            <div id="send" style={{ backgroundImage: `url(${Form})` }}>
                <div id="group" >
                    <img src={group} height='100%' width='100%'/>
                </div>
                <div id="balance1" >
                    <img src={balance1} height='100%' width='100%'/>
                </div>
                <div id="balance2" >
                    <img src={balance2} height='100%' width='100%'/>
                </div>
            </div>
        </div>
    )
}

export default SignIn