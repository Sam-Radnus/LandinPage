import React from 'react'
import logo from './../Images/logo4.png'
import {  useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate();
    return (
        <div style={{postion:'absolute',width:'100vw'}}>
           
           <nav style={{backgroundColor:'#1A202C',postion:'absolute',width:'100vw'}}  className="navbar  navbar-expand-lg navbar-custom">

  <div className="container-fluid">
  
    <Link style={{color:'white'}}  to='/' className="navbar-brand"> <img alt="logo" src={logo}  height='20px' width='20px'></img> Overpay</Link>
    <form className="d-flex">
     
      <button className="btn btn-primary" style={{backgroundColor:'rgb(25,75,251)'}} onClick={()=>{navigate('/SignIn')}}type="submit">{window.location.href!=='https://landing-page-ebon-five.vercel.app/LoggedIn'?'Sign-In':'Log Out'}</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Navbar