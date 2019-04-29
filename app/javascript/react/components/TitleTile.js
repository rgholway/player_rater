import React from 'react'

const TitleTile = props => {
    return(
      <label className="team__create--text"> {props.label}
        <input className="team__create--field--form"
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleTitleChange}
          />
      </label>
    )
  }

  export default TitleTile
