import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import PlayerIndex from './PlayerIndex'
import TeamIndex from './TeamIndex'
import PlayerShow from './PlayerShow'
import TeamShow from './TeamShow'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={TeamIndex}/>
      <Route path="/teams/:team_id/players" component={PlayerIndex}/>
      <Route path="/players/:id" component={PlayerShow}/>
      <Route path="/teams/:id" component={TeamShow} />
    </Router>
  )
}

export default App
