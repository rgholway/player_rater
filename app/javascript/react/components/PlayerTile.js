import React, { Component } from 'react'

class PlayerTile extends Component{
  constructor(props){
    super(props)
    this.state = {
      ratings: []
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }
  handleMouseEnter(){
    this.props.onMouseEnter(`${this.props.position}Info`, `player__stage player__stage--info--${this.props.css}`, `${this.props.number}`, `${this.props.firstName}`, `${this.props.lastName}`, `${this.props.nation}`)
}
  onMouseLeave(){
    this.props.handleLeave()
  }

render(){
  return(
    <div>
    <div className={`player__stage player__stage--${this.props.css}`}>
      <a href={`/games/${this.props.game}/players/${this.props.id}`}><input className={`player__stage player__stage--${this.props.css}__photo`} type="image" src={this.props.photo} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.onMouseLeave}></input></a>
      <h6 className={`player__stage player__stage--${this.props.css}__name`}>{this.props.lastName}</h6>
      <div className="player__stage--rightback__rating">
      <h1 className={`player__stage--${this.props.css}__rating--position`}>{this.props.short}</h1></div>
      </div>
      <div className={`player__stage--${this.props.css}__circle`}></div>
      <div className={`player__stage--${this.props.css}__circle--bottom`}></div>
      <div className={`${this.props.hiddenStatus}`}>
          <p className="player__stage--info--name">{this.props.selectedFirstName} {this.props.selectedLastName}</p>
          <p className="player__stage--info--number">#{this.props.selectedNumber}</p>
          <p className="player__stage--info--nation">{this.props.selectedNation}</p>
      </div>
    </div>
  )}
}

export default PlayerTile
