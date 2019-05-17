import React, { Component } from 'react'

class PositionTile extends Component {
  constructor(props) {
    super(props)
    this.state = {status: "",
    positionStatus: "",
    positionActive: "",
    newPosition: "",
    firstPosition: "",
    firstOption: "",
    secondPosition: "",
    secondOption: "",
    thirdPosition: "",
    thirdOption: "",
    fourthPosition: "",
    fourthOption: "",
    fifthPosition: "",
    fithOption: "",
    firstSelected: "",
    secondSelected: "",
    thirdSelected: "",
    fourthSelected: "",
    fifthSelected: ""
  }
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.secondMouseEnter = this.secondMouseEnter.bind(this)
    this.secondMouseLeave = this.secondMouseLeave.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleFirst = this.handleFirst.bind(this)
    this.handleSecond = this.handleSecond.bind(this)
    this.handleThird = this.handleThird.bind(this)
    this.handleFourth = this.handleFourth.bind(this)
    this.handleFifth = this.handleFifth.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
}

handleClick(){
  this.props.addPlayer("add_player", `${this.props.position}`, `${this.props.id}`)
}

handleMouseEnter(){
  if (this.props.playerPosition)
  this.setState({status: this.props.position})
  if (this.props.playerPosition == "ST")
    this.setState({firstPosition: "ST", firstOption: "--option", secondPosition: "CF", secondOption: "--option", thirdPosition: "CAM", thirdOption: "--option", fourthPosition: "CM", fourthOption: "--option", fifthPosition: "CDM", fifthOption: "--option", firstSelected: "--first" })
  if (this.props.playerPosition == "CAM")
    this.setState({firstPosition: "ST", firstOption: "--option", secondPosition: "CF", secondOption: "--option", thirdPosition: "CAM", thirdOption: "--option", fourthPosition: "CM", fourthOption: "--option", fifthPosition: "CDM", fifthOption: "--option", thirdSelected: "--third" })
  if (this.props.playerPosition == "CM")
    this.setState({firstPosition: "ST", firstOption: "--option", secondPosition: "CF", secondOption: "--option", thirdPosition: "CAM", thirdOption: "--option", fourthPosition: "CM", fourthOption: "--option", fifthPosition: "CDM", fifthOption: "--option", fourthSelected: "--fourth" })
  if (this.props.playerPosition == "CDM")
    this.setState({firstPosition: "ST", firstOption: "--option", secondPosition: "CF", secondOption: "--option", thirdPosition: "CAM", thirdOption: "--option", fourthPosition: "CM", fourthOption: "--option", fifthPosition: "CDM", fifthOption: "--option", fifthSelected: "--fifth" })
  if (this.props.playerPosition == "CF")
    this.setState({firstPosition: "ST", firstOption: "--option", secondPosition: "CF", secondOption: "--option", thirdPosition: "CAM", thirdOption: "--option", fourthPosition: "CM", fourthOption: "--option", fifthPosition: "CDM", fifthOption: "--option", secondSelected: "--second" })
  if (this.props.playerPosition == "CB")
    this.setState({firstPosition: "CB", firstOption: "--option", firstSelected: "--first"})
  if (this.props.playerPosition == "RW")
      this.setState({firstPosition: "RW", firstOption: "--option", secondPosition: "RM", secondOption: "--option", thirdPosition: "RB", thirdOption: "--option", fourthPosition: "RWB", fourthOption: "--option", firstSelected: "--first" })
  if (this.props.playerPosition == "RM")
      this.setState({firstPosition: "RW", firstOption: "--option", secondPosition: "RM", secondOption: "--option", thirdPosition: "RB", thirdOption: "--option", fourthPosition: "RWB", fourthOption: "--option", secondSelected: "--second" })
  if (this.props.playerPosition == "RB")
      this.setState({firstPosition: "RW", firstOption: "--option", secondPosition: "RM", secondOption: "--option", thirdPosition: "RB", thirdOption: "--option", fourthPosition: "RWB", fourthOption: "--option", thirdSelected: "--third" })
  if (this.props.playerPosition == "RWB")
      this.setState({firstPosition: "RW", firstOption: "--option", secondPosition: "RM", secondOption: "--option", thirdPosition: "RB", thirdOption: "--option", fourthPosition: "RWB", fourthOption: "--option", fourthSelected: "--fourth" })
  if (this.props.playerPosition == "LW")
      this.setState({firstPosition: "LW", firstOption: "--option", secondPosition: "LM", secondOption: "--option", thirdPosition: "LB", thirdOption: "--option", fourthPosition: "LWB", fourthOption: "--option", firstSelected: "--first" })
  if (this.props.playerPosition == "LM")
      this.setState({firstPosition: "LW", firstOption: "--option", secondPosition: "LM", secondOption: "--option", thirdPosition: "LB", thirdOption: "--option", fourthPosition: "LWB", fourthOption: "--option", secondSelected: "--second" })
  if (this.props.playerPosition == "LB")
      this.setState({firstPosition: "LW", firstOption: "--option", secondPosition: "LM", secondOption: "--option", thirdPosition: "LB", thirdOption: "--option", fourthPosition: "LWB", fourthOption: "--option", thirdSelected: "--third" })
  if (this.props.playerPosition == "LWB")
      this.setState({firstPosition: "LW", firstOption: "--option", secondPosition: "LM", secondOption: "--option", thirdPosition: "LB", thirdOption: "--option", fourthPosition: "LWB", fourthOption: "--option", fourthSelected: "--fourth" })
  if (this.props.playerPosition == "GK")
      this.setState({firstPosition: "GK", firstOption: "--option", firstSelected: "--first"})
}

secondMouseEnter(){
    this.setState({positionStatus: this.props.position + "_position", positionActive: "active"})
}

secondMouseLeave(){
  this.setState({positionStatus: "", positionActive: "", firstSelected: "", secondSelected: "", thirdSelected: "", fourthSelected: "", fifthSelected: ""})
}

handleMouseLeave(){
  this.setState({status: "", positionStatus: ""})
}

handleFirst(){
  this.props.changePosition(this.props.id, this.props.image, this.props.playerName, this.state.firstPosition)
  this.setState({positionStatus: "", positionActive: ""})
}

handleSecond(){
  this.props.changePosition(this.props.id, this.props.image, this.props.playerName, this.state.secondPosition)
  this.setState({positionStatus: "", positionActive: ""})
}

handleThird(){
  this.props.changePosition(this.props.id, this.props.image, this.props.playerName, this.state.thirdPosition)
  this.setState({positionStatus: "", positionActive: ""})
}

handleFourth(){
  this.props.changePosition(this.props.id, this.props.image, this.props.playerName, this.state.fourthPosition)
  this.setState({positionStatus: "", positionActive: ""})
}

handleFifth(){
  this.props.changePosition(this.props.id, this.props.image, this.props.playerName, this.state.fifthPosition)
  this.setState({positionStatus: "", positionActive: ""})
}

handleDelete(){
  this.props.delete(this.props.id, null, null, null)
}

render() {
    return(
      <div>
        <div className={`${this.props.position}--${this.props.selectedFormation}`}>
          <div className="photo" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <div className="plus_player" onClick={this.handleClick}>Add Player</div>
            <img className="field_photo" type="image" src={this.props.image} onClick={this.handleClick}></img>
            <div className={`${this.state.positionStatus}`} onMouseLeave={this.secondMouseLeave}>
              <a href= {`/totw/${this.props.params}`}><div className={`${this.state.positionActive}--first${this.state.firstOption}${this.state.firstSelected}`} onClick={this.handleFirst}>{this.state.firstPosition}</div></a>
              <a href= {`/totw/${this.props.params}`}><div className={`${this.state.positionActive}--second${this.state.secondOption}${this.state.secondSelected}`} onClick={this.handleSecond}>{this.state.secondPosition}</div></a>
              <a href= {`/totw/${this.props.params}`}><div className={`${this.state.positionActive}--third${this.state.thirdOption}${this.state.thirdSelected}`} onClick={this.handleThird}>{this.state.thirdPosition}</div></a>
              <a href= {`/totw/${this.props.params}`}><div className={`${this.state.positionActive}--fourth${this.state.fourthOption}${this.state.fourthSelected}`} onClick={this.handleFourth}>{this.state.fourthPosition}</div></a>
              <a href= {`/totw/${this.props.params}`}><div className={`${this.state.positionActive}--fifth${this.state.fifthOption}${this.state.fifthSelected}`} onClick={this.handleFifth}>{this.state.fifthPosition}</div></a>
            </div>
            <div className={`${this.state.status}--delete`}>
              <a href={`/totw/${this.props.params}`}><div className="delete__style" onClick={this.handleDelete}> X </div></a>
              <div className="update__style" onMouseEnter={this.secondMouseEnter}> U </div>
            </div>
          </div>
          <div className="info_totw">{this.props.selectedFormation}</div>
          <div className="position_totw">{this.props.playerPosition}</div>
          <div className="name_totw">{this.props.playerName}</div>
        </div>
          <div className={`${this.props.choosePlayer}`}></div>
      </div>
      )}
    }

export default PositionTile
