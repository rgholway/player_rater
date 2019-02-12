import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import PlayerIndex from './PlayerIndex'
import TeamIndex from './TeamIndex'
import PlayerShow from './PlayerShow'
import TeamShow from './TeamShow'
import GameShow from './GameShow'
import Totw from './Totw'
import Champions from './Champions'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={TeamIndex}/>
      <Route path="/teams/:team_id/players" component={PlayerIndex}/>
      <Route path="/players/:player_id" component={PlayerShow}/>
      <Route path="/teams/:id" component={TeamShow} />
      <Route path="/teams/:team_id/games/:id" component={GameShow} />
      <Route path="games/:game_id/players/:player_id" component={PlayerShow} />
      <Route path="totw" component={Totw} />
      <Route path="/champions" component={Champions} />
    </Router>
  )
}

export default App
