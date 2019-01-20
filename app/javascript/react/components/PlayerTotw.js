import React, { Component } from 'react'

class PlayerTotw extends Component {
  constructor(props) {
    super(props)
    this.state = { formation: ""}
    this.handleClick = this.handleClick.bind(this)
}

handleClick(){
  this.props.selectPlayer(`${this.props.photo}`)
}

render() {
    return(
      <a href="/totw">  <img type="image" src={this.props.photo} className="totw_photo" onClick={this.handleClick}></img></a>
      )}
    }

export default PlayerTotw
