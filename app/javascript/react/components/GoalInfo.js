import React, { Component } from 'react'

class GoalInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {player: ""}
    this.fetchPlayer = this.fetchPlayer.bind(this)
  }

  fetchPlayer() {
    fetch(`/api/v1/players/${this.props.player}`)
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
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.fetchPlayer()
  }

  render() {
    return(
    <div>
      <div className={`${this.props.team}__goal`}>
       {this.state.player.first_name} {this.state.player.last_name} {this.props.minute}'
      </div>
    </div>
    )}
  }

  export default GoalInfo
