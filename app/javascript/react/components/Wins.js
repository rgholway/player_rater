import React, { Component } from 'react'
import WinInfo from './WinInfo'

class Wins extends Component {
  constructor(props) {
    super(props);
    this.state = { wins: []  }
      }

  render() {
    let winsArray = this.props.wins.map(win => {
      return(
        <WinInfo
          key={win.id}
          team={win.team_id}
          id={win.id}
        />
      )
    })
    return(
      <div> {winsArray} </div>
    )
  }
}

export default Wins
