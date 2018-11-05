import React, { Component } from 'react';
import TeamTile from './TeamTile'
import GoalTile from './GoalTile'

class TeamIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [],
        goals: []
      };
    this.fetchTeams = this.fetchTeams.bind(this)
    this.fetchGoals = this.fetchGoals.bind(this)
  }

  fetchTeams() {
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

  fetchGoals() {
    fetch('/api/v1/goals')
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
    this.fetchTeams()
    this.fetchGoals()
  }

  render() {
    console.log(this.state.goals)
    return (
      <div>
      <div>
        <TeamTile
          teams= {this.state.teams}
          />
      </div>
        <div>
        <GoalTile
          goals = {this.state.goals}
          />
          </div>
      </div>
    )
  }
}

export default TeamIndex
