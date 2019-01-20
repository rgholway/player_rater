import React, { Component } from 'react'

class PositionTile extends Component {
  constructor(props) {
    super(props)
    this.state = { formation: ""}
    this.handleClick = this.handleClick.bind(this)
}

handleClick(){
  this.props.addPlayer("add_player")
}

render() {
    return(
      <div>
        <div className={`${this.props.position}--${this.props.selectedFormation}`} onClick={this.handleClick}></div>
        <div className={`${this.props.choosePlayer}`}></div>
      </div>
      )}
    }

export default PositionTile
