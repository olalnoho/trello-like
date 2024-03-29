import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { AuthContext } from '../../Context/AuthContext'
const Header = () => {
   const history = useHistory()
   const { authDetails, setAuthDetails } = useContext(AuthContext)
   const logOut = async e => {
      try {
         await axios.post('/api/auth/logout')
         setAuthDetails({ ...authDetails, user: {}, isAuth: false })
         history.push('/')
      } catch (err) {
         console.log(err)
      }

   }

   const guestLinks = (
      <>
         <li> <NavLink exact to="/"> Home </NavLink> </li>
         <li> <NavLink exact to="/register"> Sign up </NavLink> </li>
         <li> <NavLink exact to="/login"> Login </NavLink> </li>
      </>
   )

   const authLinks = (
      <>
         <li> <NavLink exact to="/"> Home </NavLink> </li>
         <li> <NavLink exact to="/dashboard"> Dashboard </NavLink> </li>
         <li> <Link to="#!" onClick={logOut}> Log out </Link> </li>
      </>
   )

   return (
      <header className="main-header">
         <div className="main-header__logo">
            <Link to="/"><h2> Project Tracker </h2></Link>
         </div>
         <nav className="main-header__nav">
            {
               !authDetails.initAuthLoad &&
               <ul>
                  {authDetails.isAuth ? authLinks : guestLinks}
               </ul>
            }
         </nav>
      </header>
   )
}

export default Header
