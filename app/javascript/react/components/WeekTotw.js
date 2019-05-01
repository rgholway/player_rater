import React, { Component } from 'react'

class WeekTotw extends Component {
  constructor(props) {
    super(props)
    this.state = { week: "",
      active: "",
      weeks: []
    }
    this.handleClick = this.handleClick.bind(this)
}

handleClick() {
  this.props.handleClick(this.props.id)
}

render() {
    return(
        <div className="user__teams">
          <div className="teams__title" onClick={this.handleClick}>{this.props.id}</div>
        </div>
      )}
    }

export default WeekTotw
