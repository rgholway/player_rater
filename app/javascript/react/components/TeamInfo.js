import React, { Component } from 'react'
import { browserHistory } from 'react-router';

class TeamInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedId: ""}
}
  render() {
    return(
        <a href={`teams/${this.props.id}`}><input className={`badge__icon badge__icon--${this.props.name}`} type="image" src={this.props.badge}></input></a>
    )
  }
}

  export default TeamInfo
