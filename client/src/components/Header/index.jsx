import React from 'react'
import { NavLink } from 'react-router-dom'

const  Nav = () => {

  let isLogin = false;
  return (
    <>
        <nav>
            <div className='logo'>

            </div>
            <div className='search-bar'>

            </div>
            <div className='nav-pages'>
              <ul >
                <li> <NavLink to="/">Home</NavLink> </li>
                <li> <NavLink to="/about">About Us</NavLink> </li>
                <li> <NavLink to="/contact">Contact Us</NavLink> </li>
                {isLogin ? 
                <>
                  <li> <NavLink to="/logout">Logout</NavLink> </li>
                  <li> <NavLink to="/profile">Profile</NavLink> </li>    
                </> : 
                <>
                  <li> <NavLink to="/login">Login</NavLink> </li>
                </>}
              </ul>
              <NavLink />
            </div>
        </nav>
    </>
  )
}

export default Nav;