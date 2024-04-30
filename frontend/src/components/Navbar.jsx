import React from 'react'
import {NavLink}from "react-router-dom"
import logo from '../Images/images.png'

const Navbar = () => {
  return (
    <div>

        <nav className="navbar is-fixed-top has-shodow" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
          <img src={logo}
               width="100"
                height="100"
                alt='logo'/>
       
            <NavLink to ="/dashboard"className="navbar-item" >
         
            </NavLink>
        
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" className="navbar-menu">
        
        
            <div className="navbar-end">
              <div className="navbar-item">
         
                <div className="buttons">
               
                  <button className="button is-light">
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      
    </div>
  )
}

export default Navbar
