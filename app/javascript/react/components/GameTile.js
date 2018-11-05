import React, { Component } from 'react'

class GameTile extends Component {
  constructor(props) {
    super(props)
    this.state = { team: ""}
    this.fetchTeam = this.fetchTeam.bind(this)
}
fetchTeam() {
  fetch(`/api/v1/teams/${this.props.teamId}`)
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    this.setState({ team: body });
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

componentDidMount() {
  this.fetchTeam()
}

render() {
  let gamesArray = this.props.games.map(game => {
    return(
      <div key={game.id}>
        <a href={`/teams/${this.props.teamId}/games/${game.id}`}><div className={`game--${game.week}`}>
        <h1 className="home_team"> {game.home_team} </h1>
        <h1 className="away_team"> {game.away_team} </h1>
        <h1 className="home_score"> {game.home_score} </h1>
        <h1 className="away_score"> {game.away_score} </h1>
        </div></a>
        <button className="left__arrow" value="<">left</button>
        <button className="right__arrow" value="<">right</button>
      </div>
    )
  })
    return(
      <div>
      {gamesArray}

      </div>
      )}
    }


  export default GameTile
