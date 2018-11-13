import React from 'react'
import { Link, browserHistory } from 'react-router';

const MapInfo = props => {
    return(
      <div>
        <a href={`teams/${props.id}`}><img className={`map__icon--${props.name}`} src={props.badge} alt={props.name}/></a>
      </div>
    )
  }

  export default MapInfo
