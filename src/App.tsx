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
import styled from 'styled-components';
import TagEdit from './views/TagEdit';


const AppWrapper = styled.div`
  color: #333;
`;

function NoMatch() {
  return <h2>不好意思,你走错地方了</h2>;
}

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags/>
          </Route>
          <Route exact path="/tags/:id">
            <TagEdit/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Route  exact path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;