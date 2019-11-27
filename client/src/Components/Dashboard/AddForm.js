import React from 'react'

const AddForm = () => {
   return (
      <form className="form" autoComplete="off">
         <label htmlFor="title">Project title</label>
         <input type="text" name="title" />
         <input type="submit" className="btn btn--primary" />
      </form>
   )
}

export default AddForm
