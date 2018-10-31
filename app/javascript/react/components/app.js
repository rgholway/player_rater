import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import PlayerIndex from './PlayerIndex'
import TeamIndex from './TeamIndex'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={TeamIndex}/>
      <Route path="/teams/:team_id/players" component={PlayerIndex}/>
    </Router>
  )
}

export default App
