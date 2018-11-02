import React from 'react'

const TopPlayer = props => {
  let playersArray = props.players.map(player => {
    return <div key={player.id}>
    <div className={`position--${player.position}`}><h3 className="player--text__position">{player.position}:</h3></div>
    <div className={`firstName--${player.position}`}><a href={`/players/${player.id}`}><h3 className="player--text__first">{player.first_name}</h3></a></div>
    <div className={`lastName--${player.position}`}><a href={`/players/${player.id}`}><h3 className="player--text__last">{player.last_name}</h3></a></div>
    </div>
  })
    return(
      <div>
      {playersArray}
      </div>
    )
  }

  export default TopPlayer
