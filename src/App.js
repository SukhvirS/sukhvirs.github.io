
import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Overview from './Overview';
import Skills from './Skills';
import Experience from './Experience';

class App extends React.Component {
  render() {
    return(
      <HashRouter basename="/">
        <Route exact path="/" component={Overview}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route path="/experience" component={Experience}></Route>
      </HashRouter>
    )
  }
}

export default App;
