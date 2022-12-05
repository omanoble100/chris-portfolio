import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="logo">
                <img src="./img/logo.png" alt="" />
            </div>
            <div className="nav-links">
                <a href= "#about"><span>About</span></a>
                <a href= "#store">Store</a>
                <a href='#works' >Works</a>
                <a href='#contact' >Contact</a>
            </div>
        </nav> 
    </div>
  )
}

export default Navbar