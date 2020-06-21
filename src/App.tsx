import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
   border: 1px solid red;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
`;
const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`;

const Nav =styled.div`
  border: 1px solid blue;
  > ul {
    display: flex;
    > li{
       width: 33.3%;
       text-align: center;
       padding: 16px;
    }
  }
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>

        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>记账</h2>;
}

function Statistics() {
  return <h2>统计</h2>;
}

function NoMatch() {
  return <h2>不好意思,你走错地方了</h2>;
}

export default App;