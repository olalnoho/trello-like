import React from 'react'

const List = ({list}) => {
   return (
      <div className="projects__lists-list">
         <header className="list-header">
            <h3>{list.title}</h3>
         </header>
         <ul className="list-body">
            <li>Test</li>
         </ul>
      </div>
   )
}

export default List
