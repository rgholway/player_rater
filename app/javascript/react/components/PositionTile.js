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
          <div className="photo">
            <div className="plus_player">Add Player</div>
            <img className="field_photo" type="image" src={this.props.image}></img>
          </div>
          <div className="info_totw">{this.props.selectedFormation}</div>
          <div className="position_totw">{this.props.playerPosition}</div>
          <div className="name_totw">{this.props.playerName}</div>
        </div>
          <div className={`${this.props.choosePlayer}`}></div>
      </div>
      )}
    }

export default PositionTile
