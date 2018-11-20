import React, { Component } from 'react'

class RatingTile extends Component{
  constructor(props) {
    super(props)
    this.state = {
      Totalscore: ""
      }
    }

render() {
  let totalScore = 0
  let length = this.props.ratings.length
  let ratingsArray = this.props.ratings.map(rating => {
    totalScore += rating.score
    return(
      <div key={rating.id} className="player__rate--rating">
        <h1 className="player__rate--description">{rating.description}</h1>
      </div>
    )
  })
  let averageScore = "No Ratings"
  if (totalScore != 0) {
    averageScore = (totalScore/length).toFixed(1)
}
    return(
      <div>
        <div className="player__rate--ratings">{ratingsArray}</div>
        <h1 className="player__rate--total--score">{averageScore}</h1>
      </div>
    )}
  }

  export default RatingTile
