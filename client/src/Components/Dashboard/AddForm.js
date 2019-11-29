import React, { useState } from 'react'
import axios from 'axios'
const AddForm = ({ url, setProjects, closeModal }) => {
   const [title, setTitle] = useState('')

   const onSubmit = async e => {
      e.preventDefault()
      const res = await axios.post(url, { title })
      setProjects(res.data)
      setTitle('')
      closeModal()
   }
   return (
      <form className="form" autoComplete="off" onSubmit={onSubmit}>
         <label htmlFor="title">Title</label>
         <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            name="title" />
         <input type="submit" className="btn btn--primary" />
      </form>
   )
}

export default AddForm
