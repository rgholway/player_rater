import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import PlayerIndex from './PlayerIndex'
import TeamIndex from './TeamIndex'
import PlayerShow from './PlayerShow'
import TeamShow from './TeamShow'
import GameShow from './GameShow'
import RatePlayer from './RatePlayer'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={TeamIndex}/>
      <Route path="/teams/:team_id/players" component={PlayerIndex}/>
      <Route path="/players/:id" component={RatePlayer}/>
      <Route path="/teams/:id" component={TeamShow} />
      <Route path="/teams/:team_id/games/:id" component={GameShow} />
      <Route path="games/:game_id/players/:player_id" component={PlayerShow} />
    </Router>
  )
}

export default App
