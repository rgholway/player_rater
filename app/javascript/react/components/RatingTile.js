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
      <div key={rating.id}>
        <h1 className="player__rate--rating">{rating.description} {rating.score}</h1>
      </div>
    )
  })

    return(
      <div>
      <div className="player__rate--ratings">{ratingsArray}</div>
      <h1 className="player__rate--total--score">{(totalScore/length).toFixed(1)}</h1>
      </div>
    )}
  }

  export default RatingTile
