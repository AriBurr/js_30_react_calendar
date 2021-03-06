import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import DevTools from './components/9_DevTools';
import Drums from './components/1_Drums';
import Clock from './components/2_Clock';
import CSSVariables from './components/3_CSSVariables';
import ArrayCardio1 from './components/4_ArrayCardio1';
import FlexPanel from './components/5_FlexPanel';
import TypeAhead from './components/6_TypeAhead';
// import ArrayCardio2 from './components/7_ArrayCardio2';
import Canvas from './components/8_Canvas';
import Checkbox from './components/10_Checkbox';
import VideoPlayer from './components/11_VideoPlayer';
import KeyDetection from './components/12_KeyDetection';
import Slide from './components/13_Slide';
import LocalStorage from './components/15_LocalStorage';
import Navigation from './components/Navigation';
import Refactor from './components/7_Refactor';
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
          <Route exact path="/array_cardio_2" component={Refactor} />
          <Route exact path="/canvas" component={Canvas} />
          <Route exact path="/checkbox" component={Checkbox} />
          <Route exact path="/clock" component={Clock} />
          <Route exact path="/css_variables" component={CSSVariables} />
          <Route exact path="/dev" component={DevTools} />
          <Route exact path="/drums" component={Drums} />
          <Route exact path="/flex" component={FlexPanel} />
          <Route exact path="/key_detection" component={KeyDetection} />
          <Route exact path="/local_storage" component={LocalStorage} />
          <Route exact path="/slide" component={Slide} />
          <Route exact path="/type_ahead" component={TypeAhead} />
          <Route exact path="/video_player" component={VideoPlayer} />
        </Switch>
      </div>
    );
  }
}

export default App;
