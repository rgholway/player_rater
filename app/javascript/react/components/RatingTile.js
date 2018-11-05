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
      <div key={rating.id}>{rating.score}
      <p>{rating.description}</p>
      </div>
    )
  })

    return(
      <div>
      <div>{ratingsArray}<div className="player--total--rating">
      <h1>{(totalScore/length).toFixed(1)}</h1></div>
      </div>
      </div>
    )}
  }

  export default RatingTile
