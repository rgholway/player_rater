import React from 'react'
import { Link, browserHistory } from 'react-router';

const TableInfo = props => {
    return(
      <div>
        <Link to={`teams/${props.id}`}><h1 className="names">
        {props.name} {props.points} </h1></Link>
      </div>

  )
  }

  export default TableInfo
