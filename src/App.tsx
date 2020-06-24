import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Tags from './views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';


function NoMatch() {
  return <h2>不好意思,你走错地方了</h2>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags">
          <Tags/>
        </Route>
        <Route exact path="/money">
          <Money/>
        </Route>
        <Route exact path="/statistics">
          <Statistics/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
        <Redirect exact from="/" to="/money"/>
      </Switch>
    </Router>
  );
}

export default App;