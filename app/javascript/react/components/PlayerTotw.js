import React, { Component } from 'react'

class PlayerTotw extends Component {
  constructor(props) {
    super(props)
    this.state = { formation: ""}
    this.handleClick = this.handleClick.bind(this)
}

handleClick(){
  this.props.selectPlayer(`${this.props.photo}`, `${this.props.name}`, `${this.props.position}`, `${this.props.badge}`)
}

render() {
    return(
      <div className="totw_photo">
        <a href={`/totw/${this.props.params}`}><img type="image" src={this.props.photo} className="player_photo" onClick={this.handleClick}></img></a>
        <div className="player_name">{this.props.name}</div>
      </div>
      )}
    }

export default PlayerTotw
