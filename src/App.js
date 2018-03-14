import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ArrayCardio1 from './components/4_ArrayCardio1';
import Calendar from './components/Calendar';
import Clock from './components/2_Clock';
import CSSVariables from './components/3_CSSVariables';
import Drums from './components/1_Drums';
import FlexPanel from './components/FlexPanel';
import Navigation from './components/Navigation';
import TypeAhead from './components/TypeAhead';
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
  }
  html :not(i) {
    font-family: 'Montserrat', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Calendar} />
          <Route exact path="/array_cardio_1" component={ArrayCardio1} />
          <Route exact path="/clock" component={Clock} />
          <Route exact path="/css_variables" component={CSSVariables} />
          <Route exact path="/drums" component={Drums} />
          <Route exact path="/flex" component={FlexPanel} />
          <Route exact path="/type_ahead" component={TypeAhead} />
        </Switch>
      </div>
    );
  }
}

export default App;
