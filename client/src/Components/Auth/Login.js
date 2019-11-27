import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext'
import { Redirect } from 'react-router-dom'
import useFormValidation from '../../hooks/useFormValidation'
const Login = () => {
   const { authDetails, setAuthDetails } = useContext(AuthContext)
   const [hasErrors, setHasErrors] = useState(false)
   const { handleChange, values } = useFormValidation({
      email: '',
      password: ''
   })

   if (authDetails.isAuth) {
      return <Redirect to="/" />
   }

   const handleSubmit = e => {
      e.preventDefault()
      axios.post('/api/auth/login', { ...values })
         .then(({ data }) => {
            setAuthDetails({ ...authDetails, user: data, isAuth: true })
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
               required
               value={values.email}
               onChange={handleChange}
               name="email"
               type="email"
               id="email" />
            <label htmlFor="password">Password</label>
            <input
               required
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
