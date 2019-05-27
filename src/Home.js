import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Overview from './Overview';
import Skills from './Skills';
import Experience from './Experience';
import Hobbies from './Hobbies';

class Home extends React.Component{
  render(){
    return(
      <Router>
        <Route exact path="/" component={Overview}></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/experience" component={Experience}></Route>
        <Route path="/hobbies" component={Hobbies}></Route>
      </Router>
    )
  }
}

export default Home
