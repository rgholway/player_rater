import React, { Component } from 'react'
import TitleTile from './TitleTile'
import Totw from './Totw'
import { browserHistory } from 'react-router';


class TotwScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedWeek: "",
    title: "",
    create: "active"}

    // this.handleSubmit = this.handleSubmit.bind(this)
    this.addNewWeek = this.addNewWeek.bind(this)
    // this.handleTitleChange = this.handleTitleChange.bind(this)
}

  // handleTitleChange(event) {
  //   this.setState({ title: event.target.value })
  // }
  //
  // handleSubmit(event) {
  //   event.preventDefault()
  //   let formPayload = {
  //     title: this.state.title
  //     }
  //   this.addNewWeek(formPayload)
  // }

  addNewWeek(){
      fetch(`/api/v1/weeks`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' },
        credentials: 'same-origin'
      })
      this.setState({ create: "" })
      fetch(`/api/v1/weeks`)
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
        this.setState({ selectedWeek: body })
        browserHistory.push(`/totw/${body}`)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    componentDidMount() {
      this.addNewWeek()
    }

render() {
    return(
      <div>
        <div className="gray">
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
        <div className={`creating--${this.state.create}`}>Create a Team
          <form className= "team__create--form" onSubmit={this.handleSubmit}>
            <TitleTile
              content={this.state.title}
              label="Name Your Team"
              name="title"
              handleTitleChange={this.handleTitleChange}
              />
            <input className="button" type="submit" value="Create Team"/>
          </form>
        </div>
        </div>
        </div>
      )}
    }

export default TotwScreen
