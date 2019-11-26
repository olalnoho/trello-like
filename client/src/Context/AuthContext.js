import React, { useState } from 'react'

export const AuthContext = React.createContext({
   userDetails: {},
   setUserDetails: () => { },
   isAuth: false,
   setIsAuth: () => { }
})

export default props => {
   const [userDetails, setUserDetails] = useState({
      username: '',
      email: '',
      name: '',
      id: ''
   })

   const [isAuth, setIsAuth] = useState(false)

   return <AuthContext.Provider value={{
      userDetails,
      setUserDetails,
      isAuth,
      setIsAuth
   }}>
      {props.children}
   </AuthContext.Provider>
}