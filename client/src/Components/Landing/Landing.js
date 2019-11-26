import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
   return (
      <div className="landing">
         <div className="landing__box">
            <h1>Welcome to the session test website!</h1>
            <div className="landing__box-actions">
               <Link to="/register" className="btn btn--primary"> Sign up </Link>
               <Link to="/login" className="btn btn--secondary"> Log in </Link>
            </div>
         </div>
      </div>
   )
}

export default Landing