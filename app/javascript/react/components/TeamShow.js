import React, { Component } from 'react';
import GameTile from './GameTile'
import TopPlayer from './TopPlayer'
import TeamIndex from './TeamInfo'
import MapContainer from './MapContainer'

class TeamShow extends Component {
  constructor(props) {
    super(props);
    this.state = { team: "",
          games: [],
          players: [],
          selectedStatus: ""
        }

    this.fetchGames = this.fetchGames.bind(this)
    this.fetchTeam = this.fetchTeam.bind(this)
    this.fetchPlayers = this.fetchPlayers.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter(id) {
      this.setState({selectedStatus: ""})
  }

  handleMouseLeave(status) {
    this.setState({selectedStatus: ""})
  }

  fetchTeam() {
    fetch(`/api/v1/teams/${this.props.params.id}`)
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
    this.fetchGame()
  }

  fetchGames() {
    fetch(`/api/v1/teams/${this.props.params.id}/games`)
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
      this.setState({ games: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  fetchPlayers() {
    fetch(`/api/v1/teams/${this.props.params.id}/players`)
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
      this.setState({ players: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.fetchTeam()
    this.fetchGames()
    this.fetchPlayers()
  }



  render() {
    return (
      <div className="team">
      <div>
        <div className={`${this.state.team.name}--background`}>
          <img className={`${this.state.team.name}--background__badge`} src={this.state.team.badge}></img>
          <h1 className={`${this.state.team.name}--background__nickname`}> {this.state.team.nickname}></h1>
          <h1 className={`${this.state.team.name}--background__name`}>{this.state.team.name}</h1>
        </div>
        <div className="score--title"><h3 className="scorer--text"> {this.state.team.name} Starters</h3></div>
        <div className="title">
          <h3 className="title__text">{this.state.team.name} Schedule</h3>
        </div>
        <div className="schedule">
        < GameTile
          games={this.state.games}
          teamId={this.props.params.id}
          mouseEnter={this.handleMouseEnter}
          mouseLeave={this.handleMouseLeave}
          selectedStatus={this.state.selectedStatus}
        />
        </div>
        <div className="top__players">
        < TopPlayer
          players= {this.state.players}
        />
        </div>
        </div>
        <h1 className="stadium__title">{this.state.team.stadium}</h1>
        <div>
        < MapContainer
          latitude= {this.state.team.lat}
          long= {this.state.team.long}
        />
        </div>
        </div>
    )
  }
}

export default TeamShow
