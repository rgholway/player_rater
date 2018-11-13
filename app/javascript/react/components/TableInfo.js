import React from 'react'

const TableInfo = props => {
    return(
      <div>
        <a href={`teams/${props.id}`}><h1 className="names">
        {props.name} {props.points} </h1></a>
      </div>

  )
  }

  export default TableInfo
