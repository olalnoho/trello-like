import { useContext, useEffect } from 'react'
import axios from 'axios'

import { AuthContext } from '../Context/AuthContext'

const useCheckAuth = props => {
   const {
      authDetails,
      setAuthDetails,
   } = useContext(AuthContext)

   useEffect(() => {
      axios.get('/api/auth/me')
         .then(res => {
            if (res.status === 200) {
               setAuthDetails({
                  user: res.data,
                  isAuth: true,
                  initAuthLoad: false
               })
            } else {
               setAuthDetails(prev => ({
                  ...prev,
                  isAuth: false,
                  initAuthLoad: false
               }))
            }
         })
         .catch(err => {
            setAuthDetails(prev => ({
               ...prev,
               isAuth: false,
               initAuthLoad: false
            }))
         })
   }, [setAuthDetails])

   console.log(authDetails)
}

export default useCheckAuth