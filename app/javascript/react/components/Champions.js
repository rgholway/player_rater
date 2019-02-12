import React, { Component } from 'react'

class Champions extends Component {
  constructor(props) {
    super(props)
    this.state = {player: ""}
  }

  render() {
    return(
      <div className="gray">
        <div className="first__16__line"></div>
        <div className="first__name">
          <div className="first__text">Roma</div>
          <div className="first__badge"><img className= "photo_champions" src="https://futhead.cursecdn.com/static/img/17/items/badges/6000084.png"/></div>
        </div>
        <div className="ninth__16__line"></div>
        <div className="second__16__line"></div>
        <div className="second__name">
          <div className="second__text">FC Porto</div>
          <div className="second__badge"><img className= "photo_champions" src= "http://futhead.cursecdn.com/static/img/17/clubs/236.png"/></div>
        </div>
        <div className="tenth__16__line"></div>
        <div className="third__16__line"></div>
        <div className="third__name">
          <div className="third__text">Man United</div>
          <div className="third__badge"><img className= "photo_champions" src= "https://futhead.cursecdn.com/static/img/17/items/badges/6000069.png"/></div>
        </div>
        <div className="fourth__16__line"></div>
        <div className="fourth__name">
          <div className="fourth__text">PSG</div>
          <div className="fourth__badge"><img className= "photo_champions" src= "https://futhead.cursecdn.com/static/img/15/clubs_large/73.png"/></div>
        </div>
        <div className="fifth__16__line"></div>
        <div className="sixth__16__line"></div>
        <div className="seventh__16__line"></div>
        <div className="eigth__16__line"></div>
        <div className="eleventh__16__line"></div>
        <div className="twelfth__16__line"></div>
        <div className="thirteenth__16__line"></div>
        <div className="fourteenth__16__line"></div>
        <div className="fifteenth__16__line"></div>
        <div className="sixteenth__16__line"></div>
      </div>
    )}
  }

  export default Champions
