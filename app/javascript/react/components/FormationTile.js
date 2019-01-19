import React, { Component } from 'react'

class FormationTile extends Component {
  constructor(props) {
    super(props)
    this.state = { formation: ""}
    this.handleClick = this.handleClick.bind(this)
}

handleClick(){
  this.props.selectedFormation(`${this.props.formation}`)
}

render() {
    return(
      <div>
        <button className="button_formation" onClick={this.handleClick}>{this.props.formation}</button>
      </div>
      )}
    }

export default FormationTile
