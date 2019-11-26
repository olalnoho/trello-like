import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext'
import { Redirect } from 'react-router-dom'
import useFormValidation from '../../hooks/useFormValidation'
const Login = () => {
   const { userDetails, setUserDetails } = useContext(AuthContext)
   const [hasErrors, setHasErrors] = useState(false)
   const { handleChange, values } = useFormValidation({
      email: '',
      password: ''
   })

   if (userDetails.username !== '') {
      return <Redirect to="/" />
   }

   const handleSubmit = e => {
      e.preventDefault()
      axios.post('/api/auth/login', { ...values })
         .then(({ data }) => {
            setUserDetails({ name: data.name, username: data.username, email: data.email })
         })
         .catch(err => {
            setHasErrors(true)
         })
   }

   return (
      <div className="container auth">
         <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
               value={values.email}
               onChange={handleChange}
               name="email"
               type="email"
               id="email" />
            <label htmlFor="password">Password</label>
            <input
               value={values.password}
               onChange={handleChange}
               name="password"
               type="password"
               id="password" />
            <input type="submit" className="btn btn--primary" />
         </form>
         {hasErrors && <p className="error"> Something went wrong </p>}
      </div>
   )
}

export default Login
