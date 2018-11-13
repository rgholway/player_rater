import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import TeamInfo from './TeamInfo'
import TableInfo from './TableInfo'
import MapInfo from './MapInfo'

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
      let mapArray = this.props.teams.map(team => {
        return(
          <MapInfo
            key= {team.id}
            id= {team.id}
            badge={team.badge}
            name={team.name}
          />
        )
      })
      return (
      <div className="team">
        <h1 className="title__index"> 10 Out of 10 </h1>
        <div className="flag--green"></div>
        <div className="flag--white"></div>
        <div className="flag--red"></div>
        <div className="badge__stage">
          <div> {badgeArray} </div>
        </div>
        <div className="table">
          <h1 className="table--title"> Serie A Table </h1>
          <div> {tableArray} </div>
        </div>
        <img className="italy" src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Map_of_Italy_blank.svg"/>
        <div> {mapArray} </div>
      </div>
      )
    }
  }



  export default TeamTile
