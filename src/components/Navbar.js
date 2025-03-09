
import React from 'react'
import "./Heading.css";

export default function Navbar() {
    let logoStyle = {
        height: "5rem",
        width: "5rem"
    };
    let btnStyle ={
        background: " linear-gradient(to right, #3A4DC3 0%, #7528D4 30%, #A511DA 70%,#E100D6)"
    }
  return (
      <nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand ms-2">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhrX-o8Mgob4Q3pZT0XboHzFAMaylr8Qw8A&s' style={logoStyle} className='logo'></img></a>
    <form class="d-flex justify-content-center" role="search">
      <button class="btn btn-sm me-4 rounded-5 ps-4 pe-4 text-white" type="submit" style={btnStyle}>Get Started</button>
    </form>
  </div>
</nav>
  )
}

