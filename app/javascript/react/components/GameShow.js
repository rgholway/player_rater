import React, { Component } from 'react'
import PlayerIndex from './PlayerIndex'
import GameInfo from './GameInfo'
import GoalInfo from './GoalInfo'

class GameShow extends Component {
  constructor(props) {
    super(props)
    this.state = { game: "",
      goals: []
    }
    this.fetchGame = this.fetchGame.bind(this)
    this.fetchGoals = this.fetchGoals.bind(this)
  }

  fetchGame() {
    fetch(`/api/v1/games/${this.props.params.id}`)
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
      this.setState({ game: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  fetchGoals() {
    fetch(`/api/v1/games/${this.props.params.id}/goals`)
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
      this.setState({ goals: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.fetchGame()
    this.fetchGoals()
  }

  render(){
    let goalsArray = this.state.goals.map(goal => {
      return(
        <GoalInfo
          key={goal.id}
          minute={goal.minute}
          player={goal.player_id}
          team={goal.team}
          id={goal.id}
        />
      )
    })
    return(
      <div className="gray">
        <div>
          <PlayerIndex
            team={this.props.params.team_id}
            game={this.props.params.id}
            />
        </div>
        <div className="top__game">
          <GameInfo
          home={this.state.game.home_team}
          away={this.state.game.away_team}
          homeScore={this.state.game.home_score}
          awayScore={this.state.game.away_score}
          date={this.state.game.date}
          />
          <div className="all__goals"> {goalsArray} </div>
        </div>
      </div>
    )
  }
}

export default GameShow
