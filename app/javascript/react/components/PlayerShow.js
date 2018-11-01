import React, { Component } from 'react'
import DescriptionTile from './DescriptionTile'
import ScoreTile from './ScoreTile'
import RatingTile from './RatingTile'

class PlayerShow extends Component{
  constructor(props) {
    super(props)
    this.state = {
      player: "",
      ratingDescription: "",
      ratingScore: "",
      ratings: []
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleScoreChange = this.handleScoreChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addNewRating = this.addNewRating.bind(this)
    this.fetchRating = this.fetchRating.bind(this)
    this.fetchPlayer = this.fetchPlayer.bind(this)
  }

  handleDescriptionChange(event) {
  this.setState({ ratingDescription: event.target.value})
  }

  handleScoreChange(event) {
    this.setState({ ratingScore: event.target.value})
  }

  addNewRating(formPayload){
  let jsonStringInfo = JSON.stringify(formPayload)
  fetch(`/api/v1/players/${this.props.params.id}/ratings`, {
    method: 'POST',
    body: jsonStringInfo,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' },
    credentials: 'same-origin'
  })
  .then(formPayload => formPayload.json())
  .then(formPayload => {
    this.setState({
      ratings: this.state.ratings.concat(formPayload)
    })
  })
}

  handleSubmit(event) {
  event.preventDefault()
  let formPayload = {
    description: this.state.ratingDescription,
    score: this.state.ratingScore
    }
    this.addNewRating(formPayload)
  }

  fetchPlayer(){
    fetch(`/api/v1/players/${this.props.params.id}`)
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
      this.setState({ player: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  fetchRating(){
    fetch(`/api/v1/players/${this.props.params.id}/ratings`)
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
      this.setState({ ratings: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.fetchRating()
    this.fetchPlayer()
  }

  render() {
    return(
      <div className="player__spot">
      <div className="player__spot player__spot--team">
      {this.state.player.first_name}</div>
      <div className="player__spot player__spot--form"><h1>Rate {this.state.player.first_name} {this.state.player.last_name}</h1></div>
      <form className = "form" onSubmit={this.handleSubmit}>
      <ScoreTile
        content={this.state.ratingScore}
        label= {`What rating does ${this.state.player.last_name} deserve?`}
        name="rating-score"
        handleScoreChange={this.handleScoreChange}
      />
      <DescriptionTile
          content={this.state.ratingDescription}
          label= {`How did ${this.state.player.last_name} play?`}
          name="rating-description"
          handleDescriptionChange={this.handleDescriptionChange}
      />

      <input className="button" type="submit" value="Add Rating"/>




      </form>
      <div className="player__show"></div>
      <div className="player__show player__show--info">
      <div>
      <RatingTile
      ratings= {this.state.ratings}
      />
      </div>
      </div>
      </div>
    )}
  }

  export default PlayerShow
