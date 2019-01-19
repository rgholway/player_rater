import React, { Component } from 'react'

class PositionTile extends Component {
  constructor(props) {
    super(props)
    this.state = { formation: ""}
}

render() {
  console.log(this.props.position)
  console.log(this.props.selectedFormation)
    return(
      <div>
        <div className={`${this.props.position}--${this.props.selectedFormation}`}></div>
      </div>
      )}
    }

export default PositionTile
