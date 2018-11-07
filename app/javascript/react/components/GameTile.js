import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';

class GameTile extends Component {
  constructor(props) {
    super(props)
    this.state = { team: ""}
    this.fetchTeam = this.fetchTeam.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
}
handleMouseEnter(){
  this.props.mouseEnter()
}
handleMouseLeave(){
  this.props.mouseLeave()
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
      <Link to={`/teams/${this.props.teamId}/games/${game.id}`} key={game.id}>
      <div>
        <div className={`game--${game.week}--${this.props.selectedStatus}`} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <h1 className="home_team"> {game.home_team} </h1>
        <h1 className="away_team"> {game.away_team} </h1>
        <h1 className="home_score"> {game.home_score} </h1>
        <h1 className="away_score"> {game.away_score} </h1>
        <h1 className="date"> {game.date} </h1>
        </div>
      </div></Link>
    )
  })
    return(
      <div>
      {gamesArray}

      </div>
      )}
    }


  export default GameTile
