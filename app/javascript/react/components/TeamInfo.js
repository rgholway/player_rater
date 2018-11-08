import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';

class TeamInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedId: ""}
}
  render() {
    return(
      <div>
        <a href={`teams/${this.props.id}`}><img className={`badge__icon badge__icon--${this.props.name}`} src={this.props.badge} alt={this.props.name}/></a>
        </div>
    )
  }
}

  export default TeamInfo
