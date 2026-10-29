import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import logo from "../../assets/food-logo.png"

function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="header-top-text">
          <div className="number">
            <i className="fa-light fa-phone"></i>
            <p>(414) 857 - 0107</p>
          </div>
          <div className="gmail">
            <i className="fa-light fa-envelope"></i>
            <p>yummy@bistrobliss</p>
          </div>
        </div>
        <div className="header-top-icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
      <div className="header-main">
        <div className="header-logo">
          <img src={logo}/>
          <i><strong>Bistro Bliss</strong></i>
        </div>
        <ul>
            <li>
              <Link className='a-home' to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <button>Book a table</button>
      </div>
    </header>
  )
}

export default Header