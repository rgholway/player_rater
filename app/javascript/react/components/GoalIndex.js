import React, { Component } from 'react'

class GoalTile extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [],
        selectedId: ""
     };
  }
    render() {
      debugger;
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
