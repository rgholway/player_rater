import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import TeamInfo from './TeamInfo'
import TableInfo from './TableInfo'

class TeamTile extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [],
        selectedId: ""
     };
  }
    render() {
      let badgeArray = this.props.teams.map(team => {
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
      let tableArray = this.props.teams.map(team => {
        return(
        <TableInfo
          key= {team.id}
          id= {team.id}
          name= {team.name}
          points={team.points}
          badge={team.badge}
          handleClick= {this.teamHandleClick}
        />
      )
      })
      return (
      <div className="team">
        <div className="badge__stage">
          <div> {badgeArray} </div>
        </div>
        <div className="table">
          <h1 className="table--title"> Table </h1>
          <div> {tableArray} </div>
        </div>
      </div>

      )
    }
  }



  export default TeamTile
