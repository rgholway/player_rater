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
        <div className="user__teams" onClick={this.handleClick}>
        <div className="teams__title">{this.props.title}</div>
        <div className="teams__field" onClick={this.handleClick}>
          <div className="teams__field--first__position">X</div>
          <div className="teams__field--second__position">X</div>
          <div className="teams__field--third__position">X</div>
          <div className="teams__field--fourth__position">X</div>
          <div className="teams__field--fifth__position">X</div>
          <div className="teams__field--sixth__position">X</div>
          <div className="teams__field--seventh__position">X</div>
          <div className="teams__field--eighth__position">X</div>
          <div className="teams__field--ninth__position">X</div>
          <div className="teams__field--tenth__position">X</div>
          <div className="teams__field--eleventh__position">X</div>
        </div>
        </div>
      )}
    }

export default WeekTotw
