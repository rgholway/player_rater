import React, { Component } from 'react'
import FormationTile from './FormationTile'
import PositionTile from './PositionTile'
import PlayerTotw from './PlayerTotw'
import WeekTotw from './WeekTotw'
import { browserHistory } from 'react-router';

class Totw extends Component {
  constructor(props) {
    super(props)
    this.state = {selectedFormation: "4-4-2",
      formations: [],
      positions: [],
      addPlayer: "",
      players: [],
      selectedPosition: "",
      selectedId: "",
      formationId: "",
      selectedPhoto: "",
      selectedName: "",
      selectedPosition: "",
      create: "",
      title: "",
      week: "",
      expand: "",
      button: "",
      searchString: "",
      weeks: []
    }
    this.fetchFormation = this.fetchFormation.bind(this)
    this.fetchPosition = this.fetchPosition.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.fetchWeeks = this.fetchWeeks.bind(this)
    this.handleExit = this.handleExit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.secondHandleClick = this.secondHandleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleTeam = this.handleTeam.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchPlayers = this.fetchPlayers.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.updateFormation = this.updateFormation.bind(this)
    this.secondUpdatePosition = this.secondUpdatePosition.bind(this)
  }

  updateFormation(userFormation, id) {
    let jsonInfo = JSON.stringify(userFormation)
    fetch(`/api/v1/formations/${id}`, {
      method: 'PUT',
      body: jsonInfo,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
        credentials: 'same-origin'
      })
      this.setState({selectedFormation: userFormation, formationId: id })
    }

  handleAdd(choosePlayer, add, id) {
    this.setState({addPlayer: choosePlayer, selectedPosition: add, selectedId: id})
  }

  handleExit(choosePlayer) {
    this.setState({addPlayer: ""})
  }

  handleClick(choosePlayer) {
    this.setState({expand: "--active", button: "close__button"})
  }

  secondHandleClick(choosePlayer) {
    this.setState({expand: "", button: ""})
  }

  handleTeam(selectedTeam) {
    browserHistory.push(`/totw/${selectedTeam}`)
    location.reload();
    }

  handleDelete(id) {
    this.setState({selectedId: id},
    () => this.updatePosition(null, null, null)
    )
  }

  handleChange(event) {
    const newSearchString = event.target.value
    this.setState({ searchString: newSearchString })
  }

  handleSubmit(event) {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: this.state.searchString
    })
    fetch('/api/v1/assists/search', {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ players: body })
    })
  }

  updatePosition(selectedphoto, selectedName, selectedPos, selectedBadge) {
    let jsonInfo = JSON.stringify([selectedphoto, selectedName, selectedPos, selectedBadge])
    fetch(`/api/v1/positions/${this.state.selectedId}`, {
      method: 'PUT',
      body: jsonInfo,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    this.setState({addPlayer: ""}, () => {this.fetchPosition()})
  }

  secondUpdatePosition(id, selectedphoto, selectedName, selectedPos) {
    let jsonInfo = JSON.stringify([selectedphoto, selectedName, selectedPos])
    fetch(`/api/v1/positions/${id}`, {
      method: 'PUT',
      body: jsonInfo,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    this.setState({addPlayer: ""}, () => {this.fetchPosition()})
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
      body.forEach(formation => {
        if(formation.active) {
          this.setState({selectedFormation: formation.formation})
        }
      })
      this.setState({ formations: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  fetchPlayers(){
    fetch(`/api/v1/assists`)
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
      this.setState({ players: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  fetchPosition(){
    fetch(`/api/v1/weeks/${this.props.params.id}`)
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
      this.setState({ positions: body })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  fetchWeeks(){
    fetch(`/api/v1/losses`)
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
      this.setState({ weeks: body })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.fetchFormation()
    this.fetchPlayers()
    this.fetchPosition()
    this.fetchWeeks()
  }

  render() {
    let formationArray = this.state.formations.map(item => {
      return(
        <FormationTile
          key= {item.id}
          id= {item.id}
          formation= {item.formation}
          active= {item.active}
          selectedFormation= {this.updateFormation}
        />
      )
    })
    let playerArray = this.state.players.map(player => {
      return(
        <PlayerTotw
          key= {player.id}
          name= {player.last_name}
          photo= {player.photo}
          badge= {player.badge}
          position= {player.short_position}
          selectPlayer= {this.updatePosition}
          params= {this.props.params.id}
        />
      )
    })
    let weeksArray = this.state.weeks.map(week => {
      return(
        <WeekTotw
          key= {week.id}
          id= {week.id}
          title= {week.title}
          handleClick= {this.handleTeam}
        />
      )
    })
    let positionArray = this.state.positions.map(item => {
      return(
        <PositionTile
          key= {item.id}
          id= {item.id}
          position= {item.name}
          selectedFormation= {this.state.selectedFormation}
          addPlayer= {this.handleAdd}
          changePosition= {this.secondUpdatePosition}
          delete= {this.handleDelete}
          image= {item.photo}
          playerPosition= {item.position}
          badge= {item.badge}
          playerName= {item.last_name}
          second__photo= {this.state.second__photo}
          params= {this.props.params.id}
        />
      )
    })
    return(
    <div className="gray">
      <div className={this.state.addPlayer}>
        <div className={`${this.state.addPlayer}--active`}>{playerArray}
          <form className= {`${this.state.addPlayer}--form`} onSubmit={this.handleSubmit}>
            <label className= "form__label">Search by Name, Position, or Nation</label>
            <input type='text' className="form__input" name='searchString' value={this.state.searchString} onChange={this.handleChange} />
            <input className= "form__submit" type='submit' value='Submit' />
          </form>
          <div className={`${this.state.addPlayer}--exit`} onClick={this.handleExit}></div>
        </div>
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
    <div className="title_totw">Create a Team of the Week</div>
    <div className="select_formation">
      {formationArray}
    </div>
    <div className={`user__team__space${this.state.expand}`}>
      <div className={`user__team__space__title${this.state.expand}`}>My Teams</div>
      <div className={`expand__button${this.state.expand}`} onClick={this.handleClick}>V</div>
      {weeksArray}
    </div>
    <div className={`${this.state.button}--close`} onClick={this.secondHandleClick}>{`^`}</div>
    </div>
    )}
  }

  export default Totw
