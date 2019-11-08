import React from 'react';

import MyNavbar from './components/MyNavbar';
import './skills.css';

class Skills extends React.Component{

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render(){
    return(
      <div style={{fontFamily:"Karla"}}>
        <MyNavbar />
        {
          this.state.width < 750?
          <div style={{paddingLeft:"2.7em", paddingRight:"3.5em", marginTop:"100px"}}>

            <div style={{overflow:"auto", paddingBottom:"1.5em"}}>
              <h4 style={{fontSize:"6vw"}}>General</h4>
              <ul className="mobileUL" style={{float:"left"}}>
                <li>Public Speaking</li>
                <li>Microsoft Office</li>
                <li>Git</li>
              </ul>
              <ul className="mobileUL" style={{float:"right"}}>
                <li>Agile Development</li>
                <li>Waterfall Development</li>
              </ul>
            </div>

            <div style={{overflow:"auto", paddingBottom:"1.5em"}}>
              <h4 style={{fontSize:"6vw"}}>Languages</h4>
              <ul className="mobileUL" style={{float:"left"}}>
                <li>Java</li>
              </ul>
              <ul className="mobileUL" style={{float:"right"}}>
                <li>Python</li>
              </ul>
            </div>

            <div style={{overflow:"auto", paddingBottom:"1.5em"}}>
              <h4 style={{fontSize:"6vw"}}>Front End</h4>
              <ul className="mobileUL" style={{float:"left"}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
              <ul className="mobileUL" style={{float:"right"}}>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>Semantic UI</li>
              </ul>
            </div>

            <div style={{overflow:"auto", paddingBottom:"1.5em"}}>
              <h4 style={{fontSize:"6vw"}}>Data Science</h4>
              <ul className="mobileUL" style={{float:"left"}}>
                <li>TensorFlow</li>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>Keras</li>
              </ul>
              <ul className="mobileUL" style={{float:"right"}}>
                <li>SciKit Learn</li>
                <li>Matplotlib</li>
                <li>Seaborn</li>
              </ul>
            </div>
          </div>
          :
          <div>
            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 1em 0"}}>
              <div style={{width:"900px", margin:"1em 0 0 0"}}>
                <h1 style={{float:"left", margin:"0 120px"}}>General</h1>
                <div style={{float:"right", width:"330px", textAlign:"left"}}>
                  <ul style={{listStyleType:"none", float:"left", fontSize:"20px", padding:"0"}}>
                    <li>
                      Public Speaking
                    </li>
                    <li>
                      Fluent in English, Hindi, Punjabi
                    </li>
                    <li>
                      Microsoft Office
                    </li>
                    <li>
                      Agile & Waterfall Development
                    </li>
                    <li>
                      Git
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div style={{width:"900px"}}>
                <h1 style={{float:"left", margin:"0 120px"}}>Languages</h1>
                <div style={{float:"right", width:"330px", textAlign:"left"}}>
                  <ul style={{listStyleType:"none", float:"left", fontSize:"20px", padding:"0"}}>
                    <li>
                      Java
                    </li>
                    <li>
                      Python
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div style={{width:"900px"}}>
                <h1 style={{float:"left", margin:"0 120px"}}>Front End</h1>
                <div style={{float:"right", width:"330px", textAlign:"left"}}>
                  <ul style={{listStyleType:"none", float:"left", fontSize:"20px", padding:"0"}}>
                    <li>
                      HTML / CSS
                    </li>
                    <li>
                      Javascript
                    </li>
                    <li>
                      React.js
                    </li>
                    <li>
                      Bootstrap
                    </li>
                    <li>
                      Semantic UI
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div style={{width:"900px"}}>
                <h1 style={{float:"left", margin:"0 120px"}}>Data Science</h1>
                <div style={{float:"right", width:"330px", textAlign:"left"}}>
                  <ul style={{listStyleType:"none", float:"left", fontSize:"20px", padding:"0"}}>
                    <li>
                      TensorFlow
                    </li>
                    <li>
                      NumPy
                    </li>
                    <li>
                      Pandas
                    </li>
                    <li>
                      Keras
                    </li>
                    <li>
                      SciKit Learn
                    </li>
                    <li>
                      Matplotlib
                    </li>
                    <li>
                      Seaborn
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Skills
