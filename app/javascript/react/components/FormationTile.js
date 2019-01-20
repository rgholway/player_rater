import React, { Component } from 'react'

class FormationTile extends Component {
  constructor(props) {
    super(props)
    this.state = { formation: ""}
    this.handleClick = this.handleClick.bind(this)
}

handleClick(){
  this.props.selectedFormation(`${this.props.formation}`, `${this.props.id}`)
}

render() {
    return(
      <div>
        <button className="button_formation" onClick={this.handleClick}>{this.props.formation}</button>
      </div>
      )}
    }

export default FormationTile
