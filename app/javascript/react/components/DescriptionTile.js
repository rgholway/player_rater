import React from 'react'

const DescriptionTile = props => {
    return(
      <label className="player__rate--text"> {props.label}
        <input className="player__rate--field--form"
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleDescriptionChange}
          />
      </label>
    )
  }

  export default DescriptionTile
