import { useState } from 'react'

const useForm = initState => {
   const [values, setValues] = useState(initState)

   const handleChange = e => {
      setValues({ ...values, [e.target.name]: e.target.value })
   }

   return {
      handleChange,
      values
   }
}

export default useForm