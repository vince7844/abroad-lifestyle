import React, { Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import HomePage from './pages/home/homepage.component';
import City from './pages/city/city.component';


function App() {
  return (
  <Fragment>
    <GlobalStyle />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/city/:cityname' component={City} />
    </Switch>
   </Fragment>
  );
}

export default App;
