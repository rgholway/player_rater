import React, { Component } from 'react'

class PositionTile extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
}

handleClick(){
  this.props.addPlayer("add_player", `${this.props.position}`, `${this.props.id}`)
}

render() {
    return(
      <div>
        <div className={`${this.props.position}--${this.props.selectedFormation}`} onClick={this.handleClick}>
          <img type="image" src={this.props.image}></img>
        </div>
          <div className={`${this.props.choosePlayer}`}></div>
      </div>
      )}
    }

export default PositionTile
