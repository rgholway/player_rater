import React from 'react'

const GameInfo = props => {
    return(
      <div>
        <h1 className="home__team--top">{props.home}</h1>
        <h1 className="home__score--top">{props.homeScore}</h1>
        <h1 className="away__team--top">{props.away}</h1>
        <h1 className="away__score--top">{props.awayScore}</h1>
        <div className="line"></div>
      </div>
    )
  }

  export default GameInfo
