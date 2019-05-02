import React from 'react'

const TitleTile = props => {
    return(
      <label className="create__text"> {props.label}
        <input className="create__form"
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleTitleChange}
          />
      </label>
    )
  }

  export default TitleTile
