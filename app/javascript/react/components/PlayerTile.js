import React from 'react'

const PlayerTile = props => {
  let handleMouseEnter = () => {
    props.onMouseEnter(`${props.position}Info`, `player__stage player__stage--info--${props.position}`, `${props.number}`, `${props.firstName}`, `${props.lastName}`)
  }

  let onMouseLeave = () => {
    props.handleLeave()
    }

  return(
    <div>
      <input className={`player__stage player__stage--${props.position}`} type="image" src={props.photo} onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave}></input>
      <h6 className={`player__stage player__stage--${props.position}--name`}>{props.lastName}</h6>
      <div className={`${props.hiddenStatus}`}>
        <ul>
          <li>{props.selectedFirstName} {props.selectedLastName}</li>
          <li>#{props.selectedNumber}</li>
        </ul>
      </div>
    </div>
  )
}

export default PlayerTile
