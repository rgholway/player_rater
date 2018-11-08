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
      ratings: [],
      team: ""
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
      fetch(`/api/v1/players/${this.props.params.player_id}/ratings`, {
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
    fetch(`/api/v1/players/${this.props.params.player_id}`)
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
    .then(body => {
      fetch(`/api/v1/teams/${this.state.player.team_id}`)
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
        this.setState({ team: body });
      })

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  fetchRating(){
    fetch(`/api/v1/players/${this.props.params.player_id}/ratings`)
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

  componentWillMount() {
    this.fetchRating()
    this.fetchPlayer()
  }

  render() {
    console.log(this.state.ratings)
    return(
      <div className="rate">
          <img className= "player__image" src={this.state.player.photo} />
          <img className="player__background" src={this.state.team.badge}/>
          <h1 className="player__rate--name">{this.state.player.first_name} {this.state.player.last_name} </h1>
          <h1 className="player__rate--position">{this.state.player.full_position} #{this.state.player.number} </h1>
          <h1 className="player__rate--text--title">Average Score:</h1>
          <h1 className="player__rate--form--title {">Rate {this.state.player.first_name} {this.state.player.last_name}</h1>
          <form className = "player__rate--form" onSubmit={this.handleSubmit}>
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
          <div>
              <RatingTile
                ratings= {this.state.ratings}
                />
          </div>
      </div>
    )}
  }

  export default PlayerShow
