import React, { Component } from 'react'

class WinInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { team: [],
      wins: []}
      // this.fetchWins = this.fetchWins.bind(this)
      // this.fetchTeam = this.fetchTeam.bind(this)
      // this.calculateWins = this.calculateWins.bind(this)
      }

      // fetchTeam() {
      //   fetch(`/api/v1/teams`)
      //   .then(response => {
      //     if (response.ok) {
      //       return response;
      //     } else {
      //       let errorMessage = `${response.status} (${response.statusText})`,
      //       error = new Error(errorMessage);
      //       throw(error);
      //     }
      //   })
      //   .then(response => response.json())
      //   .then(body => {
      //     this.setState({ team: body });
      //   })
      //   .catch(error => console.error(`Error in fetch: ${error.message}`));
      // }
      //
      // fetchWins() {
      //   fetch(`/api/v1/wins/${this.props.team}`)
      //   .then(response => {
      //     if (response.ok) {
      //       return response;
      //     } else {
      //       let errorMessage = `${response.status} (${response.statusText})`,
      //       error = new Error(errorMessage);
      //       throw(error);
      //     }
      //   })
      //   .then(response => response.json())
      //   .then(body => {
      //     this.setState({ wins: body });
      //   })
      //   .catch(error => console.error(`Error in fetch: ${error.message}`));
      // }
      //
      // componentDidMount() {
      //   this.fetchWins()
      //   this.fetchTeam()
      // }
      //
      // calculateWins() {
      //   this.state.team.forEach(function(team){
      //     if (team.id = this.state.wins.team_id)  {
      //     console.log(yay)
      //   }
      //   })
      // }

  render() {
    console.log(this.state.teams)
      return(
        <div key={this.state.team.id}>{this.state.team.name}{this.state.wins.length}</div>
      )
    }
  }

export default WinInfo
