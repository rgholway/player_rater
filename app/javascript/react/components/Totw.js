import React, { Component } from 'react'
import FormationTile from './FormationTile'
import PositionTile from './PositionTile'

class Totw extends Component {
  constructor(props) {
    super(props)
    this.state = {selectedFormation: "",
      formations: [],
      positions: [],
      addPlayer: ""
    }
    this.fetchFormation = this.fetchFormation.bind(this)
    this.fetchPosition = this.fetchPosition.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleExit = this.handleExit.bind(this)
  }

  handleClick(userFormation) {
    this.setState({selectedFormation: userFormation })
  }

  handleAdd(choosePlayer) {
    this.setState({addPlayer: choosePlayer})
  }

  handleExit(choosePlayer) {
    this.setState({addPlayer: ""})
  }

  fetchFormation(){
    fetch(`/api/v1/formations`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ formations: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  fetchPosition(){
    fetch(`/api/v1/positions`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ positions: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.fetchFormation()
    this.fetchPosition()
  }

  render() {
    let formationArray = this.state.formations.map(item => {
      return(
        <FormationTile
          key= {item.id}
          formation= {item.formation}
          selectedFormation= {this.handleClick}
        />
      )
    })
    let positionArray = this.state.positions.map(item => {
      return(
        <PositionTile
          key= {item.id}
          position= {item.name}
          selectedFormation= {this.state.selectedFormation}
          addPlayer= {this.handleAdd}
        />
      )
    })
    return(
    <div className="gray">
      <div className={this.state.addPlayer}>
        <div className="exit" onClick={this.handleExit}></div>
      </div>
    <div className="stage_totw">
      <div className="world_totw">
        <div className="terrain_totw">
          <div className="field_totw">
            <div className="field__texture field__texture--gradient"></div>
            <div className="field__texture field__texture--gradient-b"></div>
            <div className="field__texture field__texture--grass"></div>
            <div className="field__line field__line--goal_totw"></div>
            <div className="field__line field__line--goal field__line--goal--far_totw"></div>
            <div className="field__line field__line--outline_totw">
              <div>{positionArray}</div>
              <div className="field__line field__line--penalty_totw"> </div>
              <div className="field__line field__line--penalty-arc_totw"></div>
              <div className="field__line field__line--penalty-arc field__line--penalty-arc--far_totw"></div>
              <div className="field__line field__line--mid_totw"></div>
              <div className="field__line field__line--circle_totw"></div>
              <div className="field__line field__line--penalty field__line--penalty--far_totw"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="title_formation">Select Formation</div>
    <div className="select_formation">
      {formationArray}
    </div>
    </div>
    )}
  }

  export default Totw
