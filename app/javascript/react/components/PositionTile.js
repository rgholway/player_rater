import React, { Component } from 'react'

class PositionTile extends Component {
  constructor(props) {
    super(props)
    this.state = {status: ""}
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
}

handleClick(){
  this.props.addPlayer("add_player", `${this.props.position}`, `${this.props.id}`)
}

handleMouseEnter(){
  this.setState({status: this.props.position})
}

handleMouseLeave(){
  this.setState({status: ""})
}

handleDelete(){
  this.props.delete(this.props.id, null, null, null)
}

render() {
    return(
      <div>
      <div className={`${this.props.position}--${this.props.selectedFormation}`}>
          <div className="photo" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <div className="plus_player" onClick={this.handleClick}>Add Player</div>
            <img className="field_photo" type="image" src={this.props.image} onClick={this.handleClick}></img>
            <div className={`${this.state.status}--delete`}>
              <div className="delete__style" onClick={this.handleDelete}> X </div>
            </div>
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
