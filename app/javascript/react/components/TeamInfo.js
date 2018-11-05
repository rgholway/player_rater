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
        <Link to={`teams/${this.props.id}`}><img className={`badge__icon badge__icon--${this.props.name}`} src={this.props.badge} alt={this.props.name}/></Link>
        </div>
    )
  }
}

  export default TeamInfo
