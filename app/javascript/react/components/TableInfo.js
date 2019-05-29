import React from 'react'

const TableInfo = props => {
    return(
      <div>
        <a href={`teams/${props.id}`}>
          <h1 className="names">{props.name}</h1>
          <div className="position">{props.position}.<img className="badge_image" src={props.badge}/></div>
          <h1 className="points">{props.points}</h1>
          <h1 className="helper">Hello</h1>
        </a>
      </div>

  )
  }

  export default TableInfo
