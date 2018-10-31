import React, { Component } from 'react';
import SoccerField from './SoccerField'


class PlayerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [] };
  }

  componentDidMount() {
    fetch('/api/v1/players')
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

  render() {
    return (
      <div><SoccerField
        players={this.state.players}
      />
      </div>
    )
  }
}

export default PlayerIndex
