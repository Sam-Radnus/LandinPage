import React from 'react'
import logo from './../Images/logo4.png'
import {  useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate();
    return (
        <div>
            <nav id="black" style={{backgroundColor:'#1A202C'}} className="navbar  navbar-expand-lg navbar-custom">
                <div className="container-fluid">
                    <button  id="sign-in" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <img alt="logo" src={logo} style={{position:'absolute'}} height='32px' width='32px'></img>
                        <h1 style={{color:'white',marginTop:'7px',marginLeft:'40px',fontSize:'32px'}}>Overpay</h1>
                        <button className="btn btn-primary" onClick={()=>{
                           navigate('/SignIn')
                        }} style={{ marginLeft: '78vw' ,width:'fit-content' }} type="submit">Sign-In</button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar