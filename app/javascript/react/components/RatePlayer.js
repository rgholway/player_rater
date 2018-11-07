import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';

class RatePlayer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      player: "",
      team: ""
    }
    this.fetchPlayer = this.fetchPlayer.bind(this)
  }

  fetchPlayer(){
    fetch(`/api/v1/players/${this.props.params.id}`)
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
      this.setState({ player: body });
    })
    .then(body => {
      fetch(`/api/v1/teams/${this.state.player.team_id}`)
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
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

componentDidMount(){
  this.fetchPlayer()
}

  render() {
    return(
      <div className="team">
      <img className="player__image" src={this.state.player.photo}/>
      <h1 className="player__first--name">{this.state.player.first_name} {this.state.player.last_name}</h1>
      <Link to={`teams/${this.state.team.id}`}><h1 className="player__team">{this.state.team.name}</h1></Link>
      <h1 className="player__position">{this.state.player.full_position} #{this.state.player.number}</h1>
      <h1 className="player__nation">{this.state.player.nation}</h1>
      <img className="player__background" src={this.state.team.badge}/>


      </div>
    )}
  }

  export default RatePlayer
