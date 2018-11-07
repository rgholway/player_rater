import React from 'react'
import { Link, browserHistory } from 'react-router';

const MapInfo = props => {
    return(
      <div>

      <div>
        </div>
        <Link to={`teams/${props.id}`}><img className={`map__icon--${props.name}`} src={props.badge} alt={props.name}/></Link>
      </div>
    )
  }

  export default MapInfo
