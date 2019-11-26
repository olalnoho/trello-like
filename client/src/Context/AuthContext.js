import React, { useState } from 'react'

export const AuthContext = React.createContext({
   authDetails: {},
   setAuthDetails: () => { }
})

export default props => {
   const [authDetails, setAuthDetails] = useState({
      user: {
         username: '',
         email: '',
         name: '',
         id: ''
      },
      isAuth: false,
      initAuthLoad: true
   })


   return <AuthContext.Provider value={{
      authDetails,
      setAuthDetails
   }}>
      {props.children}
   </AuthContext.Provider>
}