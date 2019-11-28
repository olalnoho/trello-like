import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../Context/AuthContext'

const Landing = () => {
   const {
      authDetails: {
         user,
         isAuth,
         initAuthLoad
      }
   } = useContext(AuthContext)

   const guestLinks = (
      <>
         <Link to="/register" className="btn btn--primary"> Sign up </Link>
         <Link to="/login" className="btn btn--secondary"> Log in </Link>
      </>
   )

   const authLinks = (
      <>
         <Link to="/dashboard" className="btn btn--primary"> Dashboard </Link>
         <Link to="/login" className="btn btn--secondary"> Log out </Link>
      </>
   )

   return (
      <div className="landing">
         {!initAuthLoad && <div className="landing__box">
            {
               isAuth && user.username ? (
                  <h1> Welcome, {user.username} </h1>
               ) :
                  (
                     <h1> Tracking and organizing projects made simple.  </h1>
                  )}
            <div className="landing__box-actions">
               {isAuth ? authLinks : guestLinks}
            </div>
         </div>}
      </div>
   )
}

export default Landing