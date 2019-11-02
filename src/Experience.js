import React from 'react';

import MyNavbar from './components/MyNavbar'

class Experience extends React.Component{

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
      <div style={{height:"100%"}}>
        <div>
          <MyNavbar />
          {
            this.state.width < 750 ?
            <div>
              <h4 style={{margin:"1em 0 0 2em"}}>Work</h4>

              <div style={{display:"flex", margin:"10px 0 0 0"}}>
                <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseCodeWithUs">
                  <div style={{float:"left", margin:"0 0 0 0.5em", width:"60%"}}>
                    <ul style={{listStyleType:"none"}}>
                      <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Coding Teacher</h1></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Code With Us</h4></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>August 2019 - <i>present</i></h4></li>
                    </ul>
                  </div>
                  <img src="https://i.ibb.co/SKFjtTp/next.png" alt="Down Arrow" width="30px" style={{float:"right", margin:"0 3.5em 0 0"}}/>
                </div>
              </div>
              <div>
                <p style={{width:"80vw", margin:"0 0 0 2.7em", fontSize:"3.5vw"}} className="collapse" id="collapseCodeWithUs">
                  <hr style={{borderTop:"1px solid #aaa"}}/>
                  I teach kids and teenagers how to code in Scratch, Python, Java, HTML, etc. at various aferschool programs in San Jose and the surrounding area.
                </p>
              </div>


              <h4 style={{margin:"2em 0 0 2em"}}>School Projects</h4>

              <div style={{display:"flex", margin:"10px 0 0 0"}}>
                <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseAtomPayroll">
                  <div style={{float:"left", margin:"0 0 0 0.5em", width:"60%"}}>
                    <ul style={{listStyleType:"none"}}>
                      <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Atom Payroll</h1></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Front End Developer</h4></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>January 2019 - May 2019</h4></li>
                    </ul>
                  </div>
                  <img src="https://i.ibb.co/SKFjtTp/next.png" alt="Down Arrow" width="30px" style={{float:"right", margin:"0 3.5em 0 0"}}/>
                </div>
              </div>
              <div>
                <p style={{width:"80vw", margin:"0 0 0 2.7em", fontSize:"3.5vw"}} className="collapse" id="collapseAtomPayroll">
                  <hr style={{borderTop:"1px solid #aaa"}}/>
                  An employee management web application suitable for large companies. It offers useful functions such as add, delete, edit, sort, and search.
                  We used React.js and Bootstrap for frontend, MongoDB for backend, and Auth0 for user authentication.<br/>
                  <a href="https://github.com/shawnsuarez/cmpe172-atom" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                    github.com/shawnsuarez/cmpe172-atom
                  </a>
                  <br/>
                  <br/>
                </p>
              </div>

              <div style={{display:"flex",margin:"10px 0 0 0"}}>
                <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseSaferway">
                  <div style={{float:"left", margin:"0 0 0 0.5em", width:"60%"}}>
                    <ul style={{listStyleType:"none"}}>
                      <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Saferway</h1></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Front End Developer</h4></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>January 2019 - May 2019</h4></li>
                    </ul>
                  </div>
                  <img src="https://i.ibb.co/SKFjtTp/next.png" alt="Down Arrow" width="30px" style={{float:"right", margin:"0 3.5em 0 0"}}/>
                </div>
              </div>
              <div style={{margin:"0 0 8em 0"}}>
                <p style={{width:"80vw", margin:"0 0 0 2.7em", fontSize:"3.5vw"}} className="collapse" id="collapseSaferway">
                  <hr style={{borderTop:"1px solid #aaa"}}/>
                  An online alternative to Safeway that allows users to buy groceries and common household items easily by search or sorting
                  by categories. Users can create an account to save items in their shopping cart and view their purchase history.
                  We used React.js, Bootstrap, and SemanticUI for frontend and MongoDB for backend.<br/>
                  <a href="https://github.com/dmilin1/SaferWay" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                    github.com/dmilin1/SaferWay
                  </a>
                  <br/>
                  <br/>
                </p>
              </div>
            </div>
            :
            <div>
              <div style={{display:"flex", justifyContent:"center", margin:"1em 0 1em 0"}}>
                <div style={{width:"80%", margin:"1em 0 0 0"}}>
                  <h4 style={{width:"80%", margin:"28px 0 16px 40px"}}>Work</h4>
                  <div style={{float:"left", width:"40%"}}>
                    <ul style={{listStyleType:"none"}}>
                      <li><h1 style={{float:"left", width:"100%"}}>Coding Teacher</h1></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Code With Us</h4></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%"}}>August 2019 - <i>present</i></h4></li>
                    </ul>
                  </div>
                  <div style={{float:"right", width:"56%", textAlign:"left"}}>
                    <p style={{fontSize:"20px"}}>
                      I teach kids and teenagers how to code in Scratch, Python, Java, HTML, etc. at various aferschool programs in San Jose and the surrounding area.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{display:"flex", justifyContent:"center", margin:"4em 0 4em 0"}}>
                <div style={{width:"80%", margin:"1em 0 0 0"}}>
                  <h4 style={{width:"80%", margin:"16px 0 16px 40px"}}>School Projects</h4>
                  <div style={{float:"left", width:"40%"}}>
                    <ul style={{listStyleType:"none"}}>
                      <li><h1 style={{float:"left", width:"100%", fontSize:"3vw"}}>Front End Developer</h1></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Atom Payroll</h4></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%"}}>January 2019 - May 2019</h4></li>
                    </ul>
                  </div>
                  <div style={{float:"right", width:"56%", textAlign:"left"}}>
                    <p style={{fontSize:"20px"}}>
                      An employee management web application suitable for large companies. It offers useful functions such as add, delete, edit, sort, and search.
                      We used React.js and Bootstrap for frontend, MongoDB for backend, and Auth0 for user authentication.
                      <br/>
                      <a href="https://github.com/shawnsuarez/cmpe172-atom" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                        github.com/shawnsuarez/cmpe172-atom
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div style={{display:"flex", justifyContent:"center", margin:"4em 0 4em 0"}}>
                <div style={{width:"80%", margin:"1em 0 0 0"}}>
                  <div style={{float:"left", width:"40%", fontSize:"3vw"}}>
                    <ul style={{listStyleType:"none"}}>
                      <li><h1 style={{float:"left", width:"100%"}}>Front End Developer</h1></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Saferway</h4></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%"}}>January 2019 - May 2019</h4></li>
                    </ul>
                  </div>
                  <div style={{float:"right", width:"56%", textAlign:"left"}}>
                    <p style={{fontSize:"20px"}}>
                      An online alternative to Safeway that allows users to buy groceries and common household items easily by search or sorting
                      by categories. Users can create an account to save items in their shopping cart and view their purchase history.
                      We used React.js, Bootstrap, and SemanticUI for frontend and MongoDB for backend.
                      <br/>
                      <a href="https://github.com/dmilin1/SaferWay" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                        github.com/dmilin1/SaferWay
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Experience
