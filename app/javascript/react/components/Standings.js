import React, { Component } from 'react'
import Wins from './Wins'

class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = { wins: [],
            draws: [],
            losses: []
          }
        this.fetchWins = this.fetchWins.bind(this)
      }

  fetchWins() {
    fetch(`/api/v1/wins`)
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
      this.setState({ wins: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.fetchWins()
  }

  render() {
    return(
      <div>
        <Wins
        wins={this.state.wins}
        />
      </div>
    )
  }
}

export default Standings
