import React from 'react';

import MyNavbar from './components/MyNavbar';
import down from './resources/images/down.png';
import saferway1 from './resources/images/saferway/saferway1.png';
import saferway2 from './resources/images/saferway/saferway2.png';
import saferway3 from './resources/images/saferway/saferway3.png';
import saferway4 from './resources/images/saferway/saferway4.png';
import atom1 from './resources/images/atom_payroll/atom1.png';
import atom2 from './resources/images/atom_payroll/atom2.png';
import atom3 from './resources/images/atom_payroll/atom3.png';
import atom4 from './resources/images/atom_payroll/atom4.png';
import atom5 from './resources/images/atom_payroll/atom5.png';
import atom6 from './resources/images/atom_payroll/atom6.png';
import atom7 from './resources/images/atom_payroll/atom7.png';

import './experience.css';

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
            <div style={{padding:"0 3.5em 2em 2.7em"}}>
              <h4 style={{margin:"1em 0 0 0"}}>Work</h4>

              <div style={{display:"flex", margin:"10px 0 0 0"}}>
                <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseCodeWithUs">
                  <div style={{float:"left", width:"60%"}}>
                    <ul style={{listStyleType:"none", padding:"0"}}>
                      <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Coding Teacher</h1></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Code With Us</h4></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>August 2019 - <i>present</i></h4></li>
                    </ul>
                  </div>
                  <img src={down} alt="Down Arrow" width="30px" style={{float:"right"}}/>
                </div>
              </div>
              <div>
                <div style={{fontSize:"4vw"}} className="collapse" id="collapseCodeWithUs">
                  <hr style={{borderTop:"1px solid #aaa"}}/>
                  I teach kids and teenagers how to code in Scratch, Python, Java, HTML, etc. at various aferschool programs in San Jose and the surrounding area.
                </div>
              </div>

              <h4 style={{margin:"2em 0 0 0"}}>School Projects</h4>

              <div style={{display:"flex", margin:"10px 0 0 0"}}>
                <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseAtomPayroll">
                  <div style={{float:"left", width:"60%"}}>
                    <ul style={{listStyleType:"none", padding:"0"}}>
                      <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Atom Payroll</h1></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Front End Developer</h4></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>January 2019 - May 2019</h4></li>
                    </ul>
                  </div>
                  <img src={down} alt="Down Arrow" width="30px" style={{float:"right"}}/>
                </div>
              </div>
              <div>
                <p style={{fontSize:"4vw"}} className="collapse" id="collapseAtomPayroll">
                  <hr style={{borderTop:"1px solid #aaa"}}/>
                  An employee management web application suitable for large companies. It offers useful functions such as add, delete, edit, sort, and search.
                  We used React.js and Bootstrap for frontend, MongoDB for backend, and Auth0 for user authentication.<br/>
                  <a href="https://github.com/shawnsuarez/cmpe172-atom" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                    github.com/shawnsuarez/cmpe172-atom
                  </a>
                  <div id="atomIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#atomIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#atomIndicators" data-slide-to="1"></li>
                      <li data-target="#atomIndicators" data-slide-to="2"></li>
                      <li data-target="#atomIndicators" data-slide-to="3"></li>
                      <li data-target="#atomIndicators" data-slide-to="4"></li>
                      <li data-target="#atomIndicators" data-slide-to="5"></li>
                      <li data-target="#atomIndicators" data-slide-to="6"></li>
                    </ol>
                    <br/>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={atom1} class="d-block w-100" alt="Landing Page"/>
                      </div>
                      <div class="carousel-item">
                        <img src={atom2} class="d-block w-100" alt="Login"/>
                      </div>
                      <div class="carousel-item">
                        <img src={atom3} class="d-block w-100" alt="Employees"/>
                      </div>
                      <div class="carousel-item">
                        <img src={atom4} class="d-block w-100" alt="Departments"/>
                      </div>
                      <div class="carousel-item">
                        <img src={atom5} class="d-block w-100" alt="Add Employee"/>
                      </div>
                      <div class="carousel-item">
                        <img src={atom6} class="d-block w-100" alt="Edit Employee"/>
                      </div>
                      <div class="carousel-item">
                        <img src={atom7} class="d-block w-100" alt="Delete Employee"/>
                      </div>

                    </div>
                    <a class="carousel-control-prev" href="#atomIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" style={{color:"red"}} aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#atomIndicators" style={{color:"red"}} role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                  <br/>
                  <br/>
                </p>
              </div>

              <div style={{display:"flex",margin:"10px 0 0 0"}}>
                <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseSaferway">
                  <div style={{float:"left", width:"60%"}}>
                    <ul style={{listStyleType:"none", padding:"0"}}>
                      <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Saferway</h1></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Front End Developer</h4></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>January 2019 - May 2019</h4></li>
                    </ul>
                  </div>
                  <img src={down} alt="Down Arrow" width="30px" style={{float:"right"}}/>
                </div>
              </div>
              <div style={{margin:"0 0 8em 0"}}>
                <p style={{fontSize:"4vw"}} className="collapse" id="collapseSaferway">
                  <hr style={{borderTop:"1px solid #aaa"}}/>
                  An online alternative to Safeway that allows users to buy groceries and common household items easily by search or sorting
                  by categories. Users can create an account to save items in their shopping cart and view their purchase history.
                  We used React.js, Bootstrap, and SemanticUI for frontend and MongoDB for backend.<br/>
                  <a href="https://github.com/dmilin1/SaferWay" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                    github.com/dmilin1/SaferWay
                  </a>
                  <br/>
                  <br/>
                  <div id="saferwayIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#saferwayIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#saferwayIndicators" data-slide-to="1"></li>
                      <li data-target="#saferwayIndicators" data-slide-to="2"></li>
                      <li data-target="#saferwayIndicators" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={saferway1} style={{paddingBottom:"45px"}} class="d-block w-100" alt="Homepage"/>
                      </div>
                      <div class="carousel-item">
                        <img src={saferway2} style={{paddingBottom:"45px"}} class="d-block w-100" alt="Products"/>
                      </div>
                      <div class="carousel-item">
                        <img src={saferway3} style={{paddingBottom:"45px"}} class="d-block w-100" alt="Account"/>
                      </div>
                      <div class="carousel-item">
                        <img src={saferway4} style={{paddingBottom:"45px"}} class="d-block w-100" alt="Account"/>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#saferwayIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#saferwayIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
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
                      <li><h1 style={{float:"left", width:"100%", fontSize:"3vw"}}>Atom Payroll</h1></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Front End Developer</h4></li>
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
                    <div id="atomIndicators" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        <li data-target="#atomIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#atomIndicators" data-slide-to="1"></li>
                        <li data-target="#atomIndicators" data-slide-to="2"></li>
                        <li data-target="#atomIndicators" data-slide-to="3"></li>
                        <li data-target="#atomIndicators" data-slide-to="4"></li>
                        <li data-target="#atomIndicators" data-slide-to="5"></li>
                        <li data-target="#atomIndicators" data-slide-to="6"></li>
                      </ol>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src={atom1} class="d-block w-100" alt="Landing Page"/>
                        </div>
                        <div class="carousel-item">
                          <img src={atom2} class="d-block w-100" alt="Login"/>
                        </div>
                        <div class="carousel-item">
                          <img src={atom3} class="d-block w-100" alt="Employees"/>
                        </div>
                        <div class="carousel-item">
                          <img src={atom4} class="d-block w-100" alt="Departments"/>
                        </div>
                        <div class="carousel-item">
                          <img src={atom5} class="d-block w-100" alt="Add Employee"/>
                        </div>
                        <div class="carousel-item">
                          <img src={atom6} class="d-block w-100" alt="Edit Employee"/>
                        </div>
                        <div class="carousel-item">
                          <img src={atom7} class="d-block w-100" alt="Delete Employee"/>
                        </div>

                      </div>
                      <a class="carousel-control-prev" href="#atomIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" style={{color:"red"}} aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#atomIndicators" style={{color:"red"}} role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{display:"flex", justifyContent:"center", margin:"4em 0 4em 0"}}>
                <div style={{width:"80%", margin:"1em 0 0 0"}}>
                  <div style={{float:"left", width:"40%", fontSize:"3vw"}}>
                    <ul style={{listStyleType:"none"}}>
                      <li><h1 style={{float:"left", width:"100%"}}>Saferwar</h1></li>
                      <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Front End Developer</h4></li>
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
                    <div id="saferwayIndicators" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        <li data-target="#saferwayIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#saferwayIndicators" data-slide-to="1"></li>
                        <li data-target="#saferwayIndicators" data-slide-to="2"></li>
                        <li data-target="#saferwayIndicators" data-slide-to="3"></li>
                      </ol>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src={saferway1} class="d-block w-100" alt="Homepage"/>
                        </div>
                        <div class="carousel-item">
                          <img src={saferway2} class="d-block w-100" alt="Products"/>
                        </div>
                        <div class="carousel-item">
                          <img src={saferway3} class="d-block w-100" alt="Account"/>
                        </div>
                        <div class="carousel-item">
                          <img src={saferway4} class="d-block w-100" alt="Account"/>
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#saferwayIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#saferwayIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
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
