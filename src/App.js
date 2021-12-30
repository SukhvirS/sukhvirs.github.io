
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Overview from './Overview';
import Skills from './Skills';
import Experience from './Experience';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './app.css';
import Courses from './Courses';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route render={({location})=>(
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames='fade'>
              <Switch location={location}>
                <Route exact path="/" component={Overview}></Route>
                <Route path="/skills" component={Skills}></Route>
                <Route path="/experience" component={Experience}></Route>
                <Route path="/courses" component={Courses}></Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
      </BrowserRouter>
    )
  }
}

export default App;
