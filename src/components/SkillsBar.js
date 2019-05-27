import React from 'react';
import {Link} from 'react-router-dom';

class SkillsBar extends React.Component{
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{displat:"flex", justifyContent:"center"}}>
          <ul className="navbar-nav">
            <li className="nav-item" style={{margin:"0 1em"}}>
              {
                window.location.href.indexOf("general") > -1 ?
                <Link className="nav-link" to="/skills/general" style={{color:"black", outline:"1px solid black"}}>GENERAL</Link>
                :
                <Link className="nav-link" to="/skills/general" style={{color:"black"}}>GENERAL</Link>
              }

            </li>
            <li className="nav-item" style={{margin:"0 1em"}}>
              {
                window.location.href.indexOf("front-end") > -1 ?
                <Link className="nav-link" to="/skills/front-end" style={{color:"black", outline:"1px solid black"}}>FRONTEND</Link>
                :
                <Link className="nav-link" to="/skills/front-end" style={{color:"black"}}>FRONTEND</Link>
              }
            </li>
            <li className="nav-item" style={{margin:"0 1em"}}>
              {
                window.location.href.indexOf("machine-learning") > -1 ?
                <Link className="nav-link" to="/skills/machine-learning" style={{color:"black", outline:"1px solid black"}}>MACHINE LEARNING</Link>
                :
                <Link className="nav-link" to="/skills/machine-learning" style={{color:"black"}}>MACHINE LEARNING</Link>
              }
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SkillsBar
