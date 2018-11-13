import React, { Component } from 'react';
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
      selectedNationPhoto: "",
      selectedId: "",
      ratings: []
     }
     this.playerHandleEnter = this.playerHandleEnter.bind(this)
     this.handleLeave = this.handleLeave.bind(this)
  }

  playerHandleEnter(className, num, firstName, lastName, nation, id) {
        fetch(`/api/v1/players/${id}/ratings`)
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({selectedClassName: className, selectedNumber: num,
              selectedFirstName: firstName, selectedLastName: lastName, selectedNation: nation, selectedId: id, ratings: body})
        })

        .catch(error => console.error(`Error in fetch: ${error.message}`));
      }

  handleLeave() {
    this.setState({selectedClassName: "hidden", ratings: []})
  }

  handleClick(event) {
    browserHistory.push('/games')
  }

  render() {
    let totalScore = 0
    this.state.ratings.map(rating => {
      totalScore += rating.score
    })
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
          selectedId= {this.state.selectedId}
          game={this.props.game}
          totalScore={(totalScore/this.state.ratings.length).toFixed(1)}
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
