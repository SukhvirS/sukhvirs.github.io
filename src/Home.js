import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Overview from './Overview';
import Skills from './Skills.js';
import Experience from './Experience';

class Home extends React.Component{
  render(){
    return(
      <Router>
        <Route exact path="/" component={Overview}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route path="/experience" component={Experience}></Route>
      </Router>
    )
  }
}

export default Home
