import React from 'react'

const ReturnTile = props => {
  let ratingsArray = props.ratings.map(rating => {
    return(
      <div key={rating.id}>{rating.score}
      <p>{rating.description}</p></div>
    )
  })
    return(
      <div>
      <div>{ratingsArray}</div>

      </div>
    )
  }

  export default ReturnTile
