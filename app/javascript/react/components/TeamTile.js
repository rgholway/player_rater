import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import TeamInfo from './TeamInfo'

class TeamTile extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [],
        selectedId: ""
     };
  }
    render() {
      let teamsArray = this.props.teams.map(team => {
        return(
          <TeamInfo
            key= {team.id}
            id= {team.id}
            badge= {team.badge}
            name= {team.name}
            city= {team.city}
            handleClick= {this.teamHandleClick}
          />
        )
      })
      return (
      <div className="badge__stage">
        <div> {teamsArray} </div>
      </div>
      )
    }
  }



  export default TeamTile
