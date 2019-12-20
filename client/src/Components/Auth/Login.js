import React, { useContext, useState } from 'react'
import axios from '../../utils/axios'
import { AuthContext } from '../../Context/AuthContext'
import { Redirect } from 'react-router-dom'
import useForm from '../../hooks/useForm'

const Login = () => {
   const { authDetails, setAuthDetails } = useContext(AuthContext)
   const [hasErrors, setHasErrors] = useState(false)
   const { handleChange, values } = useForm({
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
            localStorage.setItem('token', data.token)
            axios.defaults.headers.common['Authorization'] = data.token
            setAuthDetails({ ...authDetails, user: data.user, isAuth: true })
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
            <input value="Submit" type="submit" className="btn btn--primary" />
         </form>
         {hasErrors && <p className="error"> Something went wrong </p>}
      </div>
   )
}

export default Login
