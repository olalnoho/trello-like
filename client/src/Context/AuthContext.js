import React, { useState } from 'react'

export const AuthContext = React.createContext({
   userDetails: {},
   setUserDetails: () => {}
})

export default props => {
   const [userDetails, setUserDetails] = useState({
      username: '',
      email: '',
      name: ''
   })
   return <AuthContext.Provider value={{
      userDetails,
      setUserDetails
   }}>
      {props.children}
   </AuthContext.Provider>
}