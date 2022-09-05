import React from 'react'
import { useState, useEffect } from 'react'
import image from './../Images/logo2.png'
import Form from './../Images/background.png'
import google from './../Images/google.png'
import { useNavigate } from 'react-router-dom'
import group from './../Images/Group254.png'
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
import { Link  } from 'react-router-dom'

import title from './../Images/title.png'
import body from './../Images/body.png'

const SignUp = () => {
    const [mobile, setMobile] = useState(window.innerWidth < 851);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const navigate=useNavigate();
    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        dimensions.width > 851 ? setMobile(true) : setMobile(false);
    }, [dimensions.width]);
    return (
        <div style={{width:'90vw'}}>
            <div id="send" style={{ backgroundColor: 'white' }}>
                <img id="logo" alt="logo" src={image} style={{ marginTop: '2vh' }} height='20' width='149px'></img>
                <div id="submit">
                    <div className="heading"><h1 >Sign Up to Overpay</h1>

                        <br />
                        <p>Send,spend and save smarter</p>
                    </div>
                    <button id="social">
                        <img alt="logo" src={google} height='20' width='20'></img>
                        {mobile && <p>Sign In with Google</p>}
                    </button>


                    <div ><p id="strike">{mobile ? <span>Or with email</span> : <span>or</span>}</p></div>
                    <div id="name" class="row">
                        <div class="col form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="First name" />
                            <label id="pad" for="floatingInput">First Name</label>
                        </div>
                        <div class="col form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Last name" />
                            <label id="pad" for="floatingInput">Last Name</label>
                        </div>
                    </div>
                    <div  className="form-floating mb-3">
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

                        <Link id="forgot" to="/Need">Forgot Password?</Link>
                    </div>
                    <p id="privacy">By creating an account, you agreeing to our <b>Privacy Policy</b>, and <b>Electronics Communication Policy.</b></p>
                    <div id="sign">
                        <button type="button" id="wideBtn"  onClick={()=>{
                            navigate('/OTP')
                        }} className="btn btn-primary">Sign-Up</button>
                    </div>
                    <br />
                    <div className="heading" id="sign">
                        <span>Already have an Account?<Link id="signup" to="/SignIn">SignIn</Link></span>
                    </div>

                </div>
           
            </div>

            {mobile && <div id="form" style={{ backgroundImage: `url(${Form})` }}>
                <div id="vector12" >
                    <img src={vector1} height='100%' width='100%' />
                </div>
                <div id="group2" >
                    <img src={group} height='100%' width='100%' />
                </div>

                <div id="vector52" >
                    <img src={vector5} height='100%' width='100%' />
                </div>
                <div id="vector62" >
                    <img src={vector6} height='100%' width='100%' />
                </div>
                <div id="vector22" >
                    <img src={vector2} height='100%' width='100%' />
                </div>
                <div id="vector32" >
                    <img src={vector2} height='100%' width='100%' />
                </div>
                <div id="vector42" >
                    <img src={vector2} height='100%' width='100%' />
                </div>
                <div id="balance3" >
                    <h1>Speady,Easy and Fast</h1>
                </div>
                <div id="balance4" >
                    <p>
                        Overplay helps you reach your saving goals,earn cash back offers,Go to disclaimer
                        for more details and get paychecks up to two days early.Get a <small>$20 </small>
                        bonus when you receive qualifying direct deposits
                    </p>
                </div>
                <div id="vector4" >
                    <img src={vector4} height='100%' width='100%' />
                </div>
                <div id="pagination">
                    <div id="ellipse21" >

                    </div>
                    <div id="rectangle2" >

                    </div>
                    <div id="ellipse22" >

                    </div>

                </div>

            </div>}

        </div>
    )
}

export default SignUp