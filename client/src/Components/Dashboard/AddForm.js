import React, { useState } from 'react'
const AddForm = () => {
   const [title, setTitle] = useState('')
   return (
      <form className="form" autoComplete="off">
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
