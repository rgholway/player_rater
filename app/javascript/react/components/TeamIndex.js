import React, { Component } from 'react';
import TeamTile from './TeamTile'

class TeamIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [] };
  }

  componentDidMount() {
    fetch('/api/v1/teams')
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
      this.setState({ teams: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div className="team">
        <TeamTile
          teams= {this.state.teams}
          />
      </div>
    )
  }
}

export default TeamIndex
