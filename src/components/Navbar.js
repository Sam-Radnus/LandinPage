import React from 'react'
import logo from './../Images/logo4.png'
import {  useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate();
    return (
        <div>
           
           <nav style={{backgroundColor:'#1A202C'}}  class="navbar  navbar-expand-lg navbar-custom">

  <div class="container-fluid">
  
    <Link style={{color:'white'}}to='/' class="navbar-brand"> <img src={logo}  height='20px' width='20px'></img> Overpay</Link>
    <form class="d-flex">
     
      <button class="btn btn-primary" style={{backgroundColor:'rgb(25,75,251)'}} type="submit">Sign-In</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Navbar