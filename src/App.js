import React, { Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/homepage.component';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
  <Fragment>
    <GlobalStyle />
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
   </Fragment>
  );
}

export default App;
