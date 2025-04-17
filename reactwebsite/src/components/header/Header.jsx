import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.jpg"
function Header() {
  return (
    <nav className="container">
       <img className="logo"src={logo} alt="" />
        <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">program</a></li>
            <li><a href="#">campus</a></li>
            <li><a href="#">testimonials</a></li>
            <li><button className="btn">contact</button></li>
        </ul>
    </nav>
  )
}

export default Header