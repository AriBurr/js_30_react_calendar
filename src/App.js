import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import Drums from './components/1_Drums';
import Clock from './components/2_Clock';

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
