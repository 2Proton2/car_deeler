import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/components/Nav/logo/logo.png'
const Nav = () => {

  let isLogin = false;
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-around pt-2 pb-2 pr-20 pl-20">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img alt="logo" className=" object-cover object-center block" src={logo} />
            <span className="ml-3 text-xl font-bold text-logoBlue">CAR DEAL</span>
          </a>
          <input
            className="w-1/4 bg-lightBlue text-center text-gray-900 p-1 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="Search for car dealer ..."
            required
          />
          <nav className="flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 hover:cursor-pointer font-bold text-logoBlue">Home</NavLink>
            <NavLink to="/about" className="mr-5 hover:cursor-pointer font-bold text-logoBlue" >About</NavLink>
            <NavLink to="/contact" className="mr-5 hover:cursor-pointer font-bold text-logoBlue">Contact</NavLink>
            <NavLink to="/login" className="mr-5 hover:cursor-pointer font-bold text-logoBlue">Login</NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Nav;