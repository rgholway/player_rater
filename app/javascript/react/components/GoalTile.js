import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import GoalIndex from './GoalIndex'

class GoalTile extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [],
        selectedId: ""
     };
  }
    render() {
      let goalsArray = this.props.goals.map(goal => {
        return (
          <GoalIndex
           key={goal.id}
           player={goal.player_id}
           />
        )
      })
        return(
          <div> {goalsArray} </div>

      )
    }
  }



  export default GoalTile
