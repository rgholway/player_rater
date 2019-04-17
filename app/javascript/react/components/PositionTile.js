import React, { Component } from 'react'

class PositionTile extends Component {
  constructor(props) {
    super(props)
    this.state = {status: "",
    positionStatus: "",
    positionActive: "",
    newPosition: "",
    firstPosition: "",
    secondPosition: "",
    thirdPosition: "",
    fourthPosition: ""
  }
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.secondMouseEnter = this.secondMouseEnter.bind(this)
    this.secondMouseLeave = this.secondMouseLeave.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleST = this.handleST.bind(this)
    this.handleCM = this.handleCM.bind(this)
    this.handleCAM = this.handleCAM.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
}

handleClick(){
  this.props.addPlayer("add_player", `${this.props.position}`, `${this.props.id}`)
}

handleMouseEnter(){
  this.setState({status: this.props.position})
}

secondMouseEnter(){
  this.setState({positionStatus: this.props.position + "_position"})
}

secondMouseLeave(){
  this.setState({positionStatus: "", positionActive: "active"})
}

handleMouseLeave(){
  this.setState({status: ""})
}

handleST(){
  this.props.changePosition(this.props.id, this.props.image, this.props.playerName, "ST")
  this.setState({positionStatus: ""})
}

handleCAM(){
  this.props.changePosition(this.props.id, this.props.image, this.props.playerName, "CAM")
  this.setState({positionStatus: ""})
}

handleCM(){
  this.props.changePosition(this.props.id, this.props.image, this.props.playerName, "CM")
  this.setState({positionStatus: ""})
}

handleDelete(){
  this.props.delete(this.props.id, null, null, null)
}

render() {
  console.log(this.state.positionStatus)
    return(
      <div>
      <div className={`${this.props.position}--${this.props.selectedFormation}`}>
          <div className="photo" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <div className="plus_player" onClick={this.handleClick}>Add Player</div>
            <img className="field_photo" type="image" src={this.props.image} onClick={this.handleClick}></img>
            <div className={`${this.state.positionStatus}`} onMouseLeave={this.secondMouseLeave}>
              <div className={`${this.state.positionStatus}--first`} onClick={this.handleST}>ST</div>
              <div className={`${this.state.positionStatus}--second`} onClick={this.handleCM}>CM</div>
              <div className={`${this.state.positionStatus}--third`} onClick={this.handleCAM}>CAM</div>
            </div>
            <div className={`${this.state.status}--delete`}>
              <a href= "/totw"><div className="delete__style" onClick={this.handleDelete}> X </div></a>
              <div className="update__style" onMouseEnter={this.secondMouseEnter}> U </div>
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
