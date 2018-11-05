import React, { Component } from 'react';
import GoalieTile from './GoalieTile'
import { browserHistory } from 'react-router'
import PlayerTile from './PlayerTile'

class SoccerField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      selectedClassName: "hidden",
      selectedNumber: "",
      selectedFirstName: "",
      selectedLastName: "",
      selectedNation: "",
      selectedNationPhoto: ""
         }
     this.playerHandleEnter = this.playerHandleEnter.bind(this)
     this.handleLeave = this.handleLeave.bind(this)
  }

  playerHandleEnter(key, className, num, firstName, lastName, nation, nation_photo) {
    this.setState({[key]: className, selectedClassName: className, selectedNumber: num,
        selectedFirstName: firstName, selectedLastName: lastName, selectedNation: nation, selectedNationPhoto: nation_photo})
  }

  handleLeave() {
    this.setState({selectedClassName: "hidden"})
  }

  handleClick(event) {
    browserHistory.push('/games')
  }

  render() {
    let playerArray = this.props.players.map(player => {
      return(
        <PlayerTile
          key= {player.id}
          id= {player.id}
          photo= {player.photo}
          onMouseEnter= {this.playerHandleEnter}
          handleLeave= {this.handleLeave}
          lastName= {player.last_name}
          firstName= {player.first_name}
          number= {player.number}
          hiddenStatus={this.state.selectedClassName}
          css= {player.position}
          short= {player.short_position}
          selectedNumber= {this.state.selectedNumber}
          selectedFirstName= {this.state.selectedFirstName}
          selectedLastName= {this.state.selectedLastName}
          nation= {player.nation}
          selectedNation= {this.state.selectedNation}
          game={this.props.game}
        />
      )
    })
    return(
        <div className="stage">
          <div className="world">
            <div className="terrain">
              <div className="field">
                <div className="field__texture field__texture--gradient"></div>
                <div className="field__texture field__texture--gradient-b"></div>
                <div className="field__texture field__texture--grass"></div>
                <div className="field__line field__line--goal"></div>
                <div className="field__line field__line--goal field__line--goal--far"></div>
                <div className="field__line field__line--outline">
                  <div> {playerArray} </div>
                  <div className="field__line field__line--penalty"> </div>
                  <div className="field__line field__line--penalty-arc"></div>
                  <div className="field__line field__line--penalty-arc field__line--penalty-arc--far"></div>
                  <div className="field__line field__line--mid"></div>
                  <div className="field__line field__line--circle"></div>
                  <div className="field__line field__line--penalty field__line--penalty--far"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )}
  }

  export default SoccerField
