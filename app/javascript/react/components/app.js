import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import PlayerIndex from './PlayerIndex'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={PlayerIndex}/>
    </Router>
  )
}

export default App
