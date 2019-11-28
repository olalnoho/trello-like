import React from 'react'
import { Link } from 'react-router-dom'
const Project = ({ project }) => {
   return (
      <div className="project center">
         <h3>{project.title}</h3>
         <Link className="btn btn--primary" to={`/projects/${project.id}`}>View Project</Link>
      </div>
   )
}

export default Project
