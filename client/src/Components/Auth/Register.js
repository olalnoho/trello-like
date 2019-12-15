import React, { useContext } from 'react'
import axios from '../../utils/axios'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import useForm from '../../hooks/useForm'

const Register = () => {
   const { authDetails, setAuthDetails } = useContext(AuthContext)
   const { handleChange, values } = useForm({
      name: '',
      username: '',
      password: '',
      email: ''
   })

   if (authDetails.isAuth) {
      return <Redirect to="/" />
   }

   const handleSubmit = e => {
      e.preventDefault()
      axios.post('/api/users/register', { ...values })
         .then(({ data }) => {
            localStorage.setItem('token', data.token)
            axios.defaults.headers.common['Authorization'] = data.token
            setAuthDetails({ ...authDetails, user: data.user, isAuth: true })
         })
   }
   return (
      <div className="container auth">
         <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input
               required
               value={values.name}
               onChange={handleChange}
               name="name"
               type="text"
               id="name" />
            <label htmlFor="email">Email</label>
            <input
               required
               value={values.email}
               onChange={handleChange}
               name="email"
               type="email"
               id="email" />
            <label htmlFor="username">Username</label>
            <input
               required
               value={values.username}
               onChange={handleChange}
               name="username"
               type="text"
               id="username" />
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
      </div>
   )
}

export default Register
