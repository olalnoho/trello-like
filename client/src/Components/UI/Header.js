import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
   return (
      <header className="main-header">
         <div className="main-header__logo">
            <Link to="/"><h2> WEBSITE </h2></Link>
         </div>
         <nav className="main-header__nav">
            <ul>
               <li> <NavLink exact to="/"> Home </NavLink> </li>
               <li> <NavLink exact to="/register"> Sign up </NavLink> </li>
               <li> <NavLink exact to="/login"> Login </NavLink> </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header
