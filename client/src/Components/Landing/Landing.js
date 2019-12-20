import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../Context/AuthContext'

const Landing = () => {
   const {
      authDetails,
      setAuthDetails
   } = useContext(AuthContext)

   const logOut = async e => {
      try {
         localStorage.removeItem('token')
         setAuthDetails({ ...authDetails, user: {}, isAuth: false })
      } catch (err) {
         console.log(err)
      }

   }

   const guestLinks = (
      <>
         <Link to="/register" className="btn btn--primary"> Sign up </Link>
         <Link to="/login" className="btn btn--secondary"> Log in </Link>
      </>
   )

   const authLinks = (
      <>
         <Link to="/dashboard" className="btn btn--primary"> Dashboard </Link>
         <Link to="#!" className="btn btn--secondary" onClick={logOut}> Log out </Link>
      </>
   )

   return (
      <div className="landing">
         {!authDetails.initAuthLoad && <div className="landing__box">
            {
               authDetails.isAuth && authDetails.user.username ? (
                  <h1> Welcome, {authDetails.user.username} </h1>
               ) :
                  (
                     <h1> Tracking and organizing projects made simple.  </h1>
                  )}
            <div className="landing__box-actions">
               {authDetails.isAuth ? authLinks : guestLinks}
            </div>
         </div>}
      </div>
   )
}

export default Landing