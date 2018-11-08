import React from 'react'
import { Link, browserHistory } from 'react-router';

const TopPlayer = props => {
  let playersArray = props.players.map(player => {
    return <div key={player.id}>
    <div className={`position--${player.position}`}><h3 className="player--text__position">{player.full_position}:</h3></div>
    <div className={`firstName--${player.position}`}><Link to={`/players/${player.id}`}><h3 className="player--text__first">{player.first_name} {player.last_name}</h3></Link></div>
    </div>
  })
    return(
      <div>
      {playersArray}
      </div>
    )
  }

  export default TopPlayer
