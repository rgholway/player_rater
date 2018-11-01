import React from 'react'

const ScoreTile = props => {
  let nums = []
for(let i = 1; i < 11; i++){
  nums.push(<option value={`${i}`} key={i}>{i}</option>)
}
    return(
      <div>
    <label>{props.label}</label>
      <select name={props.name} onChange={props.handleScoreChange}>
        {nums}
      </select>
  </div>
    )
  }

  export default ScoreTile
