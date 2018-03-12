import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import Clock from './components/2_Clock';
import Drums from './components/1_Drums';
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
  }
  html :not(i) {
    font-family: 'Montserrat', sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Calendar} />
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/drums" component={Drums} />
      </Switch>
    );
  }
}

export default App;
