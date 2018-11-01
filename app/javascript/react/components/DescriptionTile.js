import React from 'react'

const DescriptionTile = props => {
    return(
      <label> {props.label}
        <input
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleDescriptionChange}
          />
      </label>
    )
  }

  export default DescriptionTile
