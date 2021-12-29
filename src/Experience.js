import React from 'react';

import MyNavbar from './components/MyNavbar';
import down from './resources/images/down.png';
import up from './resources/images/up.png';
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
import chess from './resources/images/chess/main.png';

import './experience.css';
import RedLogo from './components/RedLogo';
import storage from 'local-storage-fallback';
import BlueLogo from './components/BlueLogo';

import grey_up_arrow from './resources/images/grey_up_arrow.png';
import grey_down_arrow from './resources/images/grey_down_arrow.png'
import white_up_arrow from './resources/images/white_up_arrow.png';
import white_down_arrow from './resources/images/white_down_arrow.png'

class Experience extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      teacherCollapseOpen: false,
      atomCollapseOpen: false,
      saferwayCollapseOpen: false,
      chessCollapseOpen: false,
      researchCollapseOpen: false,
      yelpRecommenderOpen: false,
      ssaiCollapse: false,
      abstractReasoningCollapse: false,
    };
    
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleTeacherCollapse = this.toggleTeacherCollapse.bind(this);
    this.toggleAtomCollapse = this.toggleAtomCollapse.bind(this);
    this.toggleSaferwayCollapse = this.toggleSaferwayCollapse.bind(this);
    this.toggleChessCollapse = this.toggleChessCollapse.bind(this);
    this.toggleResearchCollapse = this.toggleResearchCollapse.bind(this);
    this.toggleYelpRecommenderCollapse = this.toggleYelpRecommenderCollapse.bind(this);
    this.toggleSSAICollapse = this.toggleSSAICollapse.bind(this);
    this.toggleAbstractReasoningCollapse = this.toggleAbstractReasoningCollapse.bind(this);
    this.getInitialTheme = this.getInitialTheme.bind(this);
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

  toggleTeacherCollapse(){
    this.setState({
      teacherCollapseOpen: !this.state.teacherCollapseOpen
    });
  }

  toggleChessCollapse(){
    this.setState({
      chessCollapseOpen: !this.state.chessCollapseOpen
    });
  }

  toggleAtomCollapse(){
    this.setState({
      atomCollapseOpen: !this.state.atomCollapseOpen
    });
  }

  toggleSaferwayCollapse(){
    this.setState({
      saferwayCollapseOpen: !this.state.saferwayCollapseOpen
    });
  }

  toggleResearchCollapse(){
    this.setState({
      researchCollapseOpen: !this.state.researchCollapseOpen
    });
  }

  toggleYelpRecommenderCollapse(){
    this.setState({
      yelpRecommenderOpen: !this.state.yelpRecommenderOpen
    })
  }

  toggleSSAICollapse(){
    this.setState({
      ssaiCollapse: !this.state.ssaiCollapse
    })
  }

  toggleAbstractReasoningCollapse(){
    this.setState({
      abstractReasoningCollapse: !this.state.abstractReasoningCollapse
    })
  }

  getInitialTheme(){
    const savedTheme = storage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : {mode:'light'}
  }


  render(){
    const theme = this.getInitialTheme();
    return(
      <div style={{fontFamily:"Circular"}}>
        <MyNavbar />
        {
          this.state.width < 750 ?
          <div style={{padding:"0 3.5em 2em 2.7em", marginTop:"100px"}}>
            <h4 style={{margin:"1em 0 0 0"}}>Work</h4>
            {
              theme.mode == 'dark'?
              <hr style={{borderTop:'1px solid #3d3d3d', marginBottom:'-10px'}} />
              :
              <hr style={{borderTop:'1px solid #d4d4d4', marginBottom:'-10px'}} />
            }


            {/* SSAI */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseSSAI" onClick={this.toggleSSAICollapse}>
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>ML/AI Intern</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Science Systems and Applications</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Jun 2021 - Aug 2021</h4></li>
                  </ul>
                </div>

                {
                  this.state.ssaiCollapse ?
                  <img src={up} alt="Up" width="30px" style={{float:"right"}}/>
                  :
                  <img src={down} alt="Down" width="30px" style={{float:"right"}}/>
                }
              </div>
            </div>
            <div>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseSSAI">
                {/* <hr style={{borderTop:"1px solid #aaa"}}/> */}
                Used satellite image data to train CNNs to perform land cover classification and also trained and evaluated models to improve accuracy and inference time.
              </div>
            </div>



            {/* SJSU Research */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseResearch" onClick={this.toggleResearchCollapse}>
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Research Assistant</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>SJSU Foundation</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Aug 2020 - Sep 2021</h4></li>
                  </ul>
                </div>
                {
                  this.state.researchCollapseOpen ?
                  <img src={up} alt="Up" width="30px" style={{float:"right"}}/>
                  :
                  <img src={down} alt="Down" width="30px" style={{float:"right"}}/>
                }
              </div>
            </div>
            <div>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseResearch">
                {/* <hr style={{borderTop:"1px solid #aaa"}}/> */}
                A wildfire detection and prediction dashboard that can be used to view and analyze current fires and well as predicted progression of current fires. Built using multiple Machine Learning models.
              </div>
            </div>



            {/* Code with us */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseCodeWithUs" onClick={this.toggleTeacherCollapse}>
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Coding Teacher</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Code With Us</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Aug 2019 - Mar 2020</h4></li>
                  </ul>
                </div>
                {
                  this.state.teacherCollapseOpen ?
                  <img src={up} alt="Up" width="30px" style={{float:"right"}}/>
                  :
                  <img src={down} alt="Down" width="30px" style={{float:"right"}}/>
                }
              </div>
            </div>
            <div>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseCodeWithUs">
                {/* <hr style={{borderTop:"1px solid #aaa"}}/> */}
                I taught kids and teenagers how to code in Scratch, Python, Java, HTML, etc. at various aferschool programs in San Jose and the surrounding area.
              </div>
            </div>




            <h4 style={{margin:"2em 0 0 0"}}>Projects</h4>
            {/* <hr style={{borderTop:'1px solid #d4d4d4', marginBottom:'-10px'}} /> */}
            {
              theme.mode == 'dark'?
              <hr style={{borderTop:'1px solid #3d3d3d', marginBottom:'-10px'}} />
              :
              <hr style={{borderTop:'1px solid #d4d4d4', marginBottom:'-10px'}} />
            }

            {/* ML abstract reasoning */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseAbstractReasoning" onClick={this.toggleAbstractReasoningCollapse} >
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>ML Abstract Reasoning</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Machine Learning Engineer</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Jan 2021 - Dec 2021</h4></li>
                  </ul>
                </div>
                {
                  this.state.abstractReasoningCollapse ?
                  <img src={up} alt="Up" width="30px" style={{float:"right"}}/>
                  :
                  <img src={down} alt="Down" width="30px" style={{float:"right"}}/>
                }
              </div>
            </div>
            <div>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseAbstractReasoning">
                Machine learning models that can pass visual IQ tests (<a href='https://en.wikipedia.org/wiki/Raven%27s_Progressive_Matrices' target="_blank">Raven's Progressive Matrices</a>) at an 80% success rate, showing the model's ability to learn the underlying patterns.
                    <br/>
                    <a href="https://github.com/alisaeidi92/distracting_feature" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                      https://github.com/alisaeidi92/distracting_feature
                    </a>
                  <img src="https://prod-cdn-assessment-blob.azureedge.net/cache/d/f/d/d/6/4/dfdd64bd4dbfb61a974afa09f32a8f375fab5257.png" width="100%" alt="Sample Raven's Progressive Matrix"/>
                  <br/>
                  <br/>
              </div>
            </div>


            {/* Bishop AI */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseChess" onClick={this.toggleChessCollapse} >
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Bishop AI</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Machine Learning Engineer</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Jan 2019 - Dec 2019</h4></li>
                  </ul>
                </div>
                {
                  this.state.chessCollapseOpen ?
                  <img src={up} alt="Up" width="30px" style={{float:"right"}}/>
                  :
                  <img src={down} alt="Down" width="30px" style={{float:"right"}}/>
                }
              </div>
            </div>
            <div>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseChess">
                {/* <hr style={{borderTop:"1px solid #aaa"}}/> */}
                  An AI capable enough to beat the average chess player. Our model was built using Convolutional Neural Networks and trained
                  on thousands of high level human Chess games.<br/>
                <a href="https://github.com/dmilin1/BishopAI" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                  https://github.com/dmilin1/BishopAI
                </a>
                <img src={chess} alt="Bishop AI" width="100%"/>
                <br/>
                <br/>
              </div>
            </div>


            {/* Yelp recommender */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseYelpRecommender" onClick={this.toggleYelpRecommenderCollapse} >
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Business Recommender System</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Machine Learning Engineer</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Aug 2020 - Dec 2020</h4></li>
                  </ul>
                </div>
                {
                  this.state.yelpRecommenderOpen ?
                  <img src={up} alt="Up" width="30px" style={{float:"right"}}/>
                  :
                  <img src={down} alt="Down" width="30px" style={{float:"right"}}/>
                }
              </div>
            </div>
            <div>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseYelpRecommender">
                {/* <hr style={{borderTop:"1px solid #aaa"}}/> */}
                  A business recommendation system built using collaborative filtering and content-based algorithms and trained on the <a href="https://www.yelp.com/dataset">Yelp Academic dataset</a>.
              </div>
            </div>


            {/* Atom payroll */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseAtomPayroll" onClick={this.toggleAtomCollapse} >
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Atom Payroll</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Front End Developer</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Jan 2019 - May 2019</h4></li>
                  </ul>
                </div>
                {
                  this.state.atomCollapseOpen ?
                  <img src={up} alt="Up" width="30px" style={{float:"right"}}/>
                  :
                  <img src={down} alt="Down" width="30px" style={{float:"right"}}/>
                }
              </div>
            </div>
            <div>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseAtomPayroll">
                {/* <hr style={{borderTop:"1px solid #aaa"}}/> */}
                An employee management web application suitable for large companies. It offers useful functions such as add, delete, edit, sort, and search.
                We used React.js and Bootstrap for frontend, MongoDB for backend, and Auth0 for user authentication.<br/>
                <a href="https://github.com/shawnsuarez/cmpe172-atom" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                  github.com/shawnsuarez/cmpe172-atom
                </a>
                <div id="atomIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#atomIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#atomIndicators" data-slide-to="1"></li>
                    <li data-target="#atomIndicators" data-slide-to="2"></li>
                    <li data-target="#atomIndicators" data-slide-to="3"></li>
                    <li data-target="#atomIndicators" data-slide-to="4"></li>
                    <li data-target="#atomIndicators" data-slide-to="5"></li>
                    <li data-target="#atomIndicators" data-slide-to="6"></li>
                  </ol>
                  <br/>
                  <div className="carousel-inner" style={{zIndex:"0"}}>
                    <div className="carousel-item active">
                      <img src={atom1} className="d-block w-100" style={{zIndex:"0"}} alt="Landing Page"/>
                    </div>
                    <div className="carousel-item">
                      <img src={atom2} className="d-block w-100" alt="Login"/>
                    </div>
                    <div className="carousel-item">
                      <img src={atom3} className="d-block w-100" alt="Employees"/>
                    </div>
                    <div className="carousel-item">
                      <img src={atom4} className="d-block w-100" alt="Departments"/>
                    </div>
                    <div className="carousel-item">
                      <img src={atom5} className="d-block w-100" alt="Add Employee"/>
                    </div>
                    <div className="carousel-item">
                      <img src={atom6} className="d-block w-100" alt="Edit Employee"/>
                    </div>
                    <div className="carousel-item">
                      <img src={atom7} className="d-block w-100" alt="Delete Employee"/>
                    </div>

                  </div>
                  <a className="carousel-control-prev" href="#atomIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" style={{color:"red"}} aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#atomIndicators" style={{color:"red"}} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <br/>
                <br/>
              </div>
            </div>


            {/* Saferway */}
            <div style={{display:"flex",margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseSaferway" onClick={this.toggleSaferwayCollapse}>
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>Saferway</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Front End Developer</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Jan 2019 - May 2019</h4></li>
                  </ul>
                </div>
                {
                  this.state.saferwayCollapseOpen ?
                  <img src={up} alt="Up" width="30px" style={{float:"right"}}/>
                  :
                  <img src={down} alt="Down" width="30px" style={{float:"right"}}/>
                }
              </div>
            </div>
            <div style={{margin:"0 0 8em 0"}}>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseSaferway">
                {/* <hr style={{borderTop:"1px solid #aaa"}}/> */}
                An online alternative to Safeway that allows users to buy groceries and common household items easily by search or sorting
                by categories. Users can create an account to save items in their shopping cart and view their purchase history.
                We used React.js, Bootstrap, and SemanticUI for frontend and MongoDB for backend.<br/>
                <a href="https://github.com/dmilin1/SaferWay" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                  github.com/dmilin1/SaferWay
                </a>
                <br/>
                <br/>
                <div id="saferwayIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#saferwayIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#saferwayIndicators" data-slide-to="1"></li>
                    <li data-target="#saferwayIndicators" data-slide-to="2"></li>
                    <li data-target="#saferwayIndicators" data-slide-to="3"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={saferway1} style={{paddingBottom:"45px"}} className="d-block w-100" alt="Homepage"/>
                    </div>
                    <div className="carousel-item">
                      <img src={saferway2} style={{paddingBottom:"45px"}} className="d-block w-100" alt="Products"/>
                    </div>
                    <div className="carousel-item">
                      <img src={saferway3} style={{paddingBottom:"45px"}} className="d-block w-100" alt="Account"/>
                    </div>
                    <div className="carousel-item">
                      <img src={saferway4} style={{paddingBottom:"45px"}} className="d-block w-100" alt="Account"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#saferwayIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#saferwayIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <br/>
                <br/>
              </div>
            </div>
            
          </div>
          :
          <div>
            <div style={{display:"flex", justifyContent:"center"}}>
              <div style={{width:"80vw"}}>
                <h4 style={{margin:"10px 0 16px 30px"}}>Work</h4>
                {/* <hr style={{borderTop:'1px solid #d4d4d4', width:'76vw'}}/> */}
                {
                  theme.mode == 'dark'?
                  <hr style={{borderTop:'1px solid #3d3d3d', width: '76vw'}} />
                  :
                  <hr style={{borderTop:'1px solid #d4d4d4', width: '76vw'}} />
                }

                {/* SSAI */}
                <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                  <ul style={{listStyleType:"none"}}>
                    <li><h1 style={{float:"left", width:"100%"}}>ML/AI Intern</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Science Systems and Applications</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jun 2021 - Aug 2021</h4></li>
                  </ul>
                </div>
                <div style={{float:"right", width:"56%", textAlign:"left"}}>
                  <p style={{fontSize:"20px"}}>
                    Used satellite image data to train CNNs to perform land cover classification and also trained and evaluated models to improve accuracy and inference time.
                  </p>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>


                {/* SJSU Research foundation */}
                <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                  <ul style={{listStyleType:"none"}}>
                    <li><h1 style={{float:"left", width:"100%"}}>Research Assistant</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>SJSU Foundation</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Aug 2020 - Sep 2021</h4></li>
                  </ul>
                </div>
                <div style={{float:"right", width:"56%", textAlign:"left"}}>
                  <p style={{fontSize:"20px"}}>
                    A wildfire detection and prediction dashboard that can be used to view and analyze current fires and well as predicted progression of current fires. Built using multiple Machine Learning models.
                  </p>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>


                {/* Code with us */}
                <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                  <ul style={{listStyleType:"none"}}>
                    <li><h1 style={{float:"left", width:"100%"}}>Coding Teacher</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Code With Us</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Aug 2019 - Mar 2020</h4></li>
                  </ul>
                </div>
                <div style={{float:"right", width:"56%", textAlign:"left"}}>
                  <p style={{fontSize:"20px"}}>
                    I taught kids and teenagers how to code in Scratch, Python, Java, HTML, etc. at various aferschool programs in San Jose and the surrounding area.
                  </p>
                </div>
              </div>
            </div>



            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 0 0"}}>
              <div style={{width:"80%", margin:"1em 0 0 0"}}>
                <h4 style={{width:"80%", margin:"16px 0 16px 30px"}}>Projects</h4>
                {/* <hr style={{borderTop:'1px solid #d4d4d4', width:'76vw'}}/> */}
                {
                  theme.mode == 'dark'?
                  <hr style={{borderTop:'1px solid #3d3d3d', width: '76vw'}} />
                  :
                  <hr style={{borderTop:'1px solid #d4d4d4', width: '76vw'}} />
                }
              </div>
            </div>


            {/* ML abstract reasoning */}
            <div style={{display:"flex", justifyContent:"center", margin:"0 0 4em 0"}}>
              <div style={{width:"80%"}}>
                <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                  <ul style={{listStyleType:"none"}}>
                    <li><h1 style={{float:"left", width:"100%"}}>ML Abstract Reasoning</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Machine Learning Engineer</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jan 2021 - Dec 2021</h4></li>
                  </ul>
                </div>
                <div style={{float:"right", width:"56%", textAlign:"left"}}>
                  <p style={{fontSize:"20px"}}>
                    <p>
                      Machine learning models that can pass visual IQ tests, also known as Raven's Progressive Matrices (RPMs), at an 80% success rate, showing the model's ability to learn the underlying patterns.
                    </p>

                    {
                      theme.mode == 'dark'?
                      <a href='https://github.com/alisaeidi92/distracting_feature' target='_blank' rel="noopener noreferrer">
                        <div id='linkedin_btn_dark' style={{fontSize:'18px'}}>
                          <span id='linkedin_label_dark'>GitHub Repo</span>
                          <span id='linkedin_reveal_dark'>distracting_feature</span>
                          <div id='linkedin_image_dark' />
                        </div>
                      </a>
                      :
                      <a href='https://github.com/alisaeidi92/distracting_feature' target='_blank' rel="noopener noreferrer">
                      <div id='linkedin_btn' style={{fontSize:'18px'}}>
                        <span id='linkedin_label'>GitHub Repo</span>
                        <span id='linkedin_reveal'>distracting_feature</span>
                        <div id='linkedin_image' />
                      </div>
                    </a>
                  }

                    {/* <a href='https://github.com/alisaeidi92/distracting_feature' target='_blank' rel="noopener noreferrer">
                      <div id='linkedin_btn' style={{fontSize:'18px'}}>
                        <span id='linkedin_label'>GitHub Repo</span>
                        <span id='linkedin_reveal'>distracting_feature</span>
                        <div id='linkedin_image' />
                      </div>
                    </a> */}

                    <br/>

                    {
                      theme.mode == 'dark'?
                      <a href='https://en.wikipedia.org/wiki/Raven%27s_Progressive_Matrices' target='_blank' rel="noopener noreferrer">
                        <div id='linkedin_btn_dark' style={{fontSize:'18px'}}>
                          <span id='linkedin_label_dark'>Visual IQ Tests</span>
                          <span id='linkedin_reveal_dark'>Visual IQ Tests</span>
                          <div id='linkedin_image_dark' />
                        </div>
                      </a>
                      :
                      <a href='https://en.wikipedia.org/wiki/Raven%27s_Progressive_Matrices' target='_blank' rel="noopener noreferrer">
                      <div id='linkedin_btn' style={{fontSize:'18px'}}>
                        <span id='linkedin_label'>GitHub Repo</span>
                        <span id='linkedin_reveal'>Visual IQ Tests</span>
                        <div id='linkedin_image' />
                      </div>
                    </a>
                    }

                  </p>
                  <img src="https://prod-cdn-assessment-blob.azureedge.net/cache/d/f/d/d/6/4/dfdd64bd4dbfb61a974afa09f32a8f375fab5257.png" width="100%" alt="Sample Raven's Progressive Matrix" style={{border:'2px solid #c9c9c9'}}/>
                </div>
              </div>
            </div>


            {/* Bishop AI */}
            <div style={{display:"flex", justifyContent:"center", margin:"0 0 4em 0"}}>
              <div style={{width:"80%", margin:'1em 0 0 0'}}>
                <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                  <ul style={{listStyleType:"none"}}>
                    <li><h1 style={{float:"left", width:"100%"}}>Bishop AI</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Machine Learning Engineer</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jan 2019 - Dec 2019</h4></li>
                  </ul>
                </div>
                <div style={{float:"right", width:"56%", textAlign:"left"}}>
                  <p style={{fontSize:"20px"}}>
                    <p>
                      An AI capable enough to beat the average chess player. Our model was built using Convolutional Neural Networks and trained on thousands of high level human chess games.
                    </p>

                    {
                      theme.mode == 'dark'?
                      <a href='https://github.com/dmilin1/BishopAI' target='_blank' rel="noopener noreferrer">
                        <div id='linkedin_btn_dark' style={{fontSize:'18px'}}>
                          <span id='linkedin_label_dark'>GitHub Repo</span>
                          <span id='linkedin_reveal_dark'>BishopAI</span>
                          <div id='linkedin_image_dark' />
                        </div>
                      </a>
                      :
                      <a href='https://github.com/dmilin1/BishopAI' target='_blank' rel="noopener noreferrer">
                        <div id='linkedin_btn' style={{fontSize:'18px'}}>
                          <span id='linkedin_label'>GitHub Repo</span>
                          <span id='linkedin_reveal'>BishopAI</span>
                          <div id='linkedin_image' />
                        </div>
                      </a>
                    }
                    

                    {/* <a href='https://github.com/dmilin1/BishopAI' target='_blank' rel="noopener noreferrer">
                      <div id='linkedin_btn' style={{fontSize:'18px'}}>
                        <span id='linkedin_label'>GitHub Repo</span>
                        <span id='linkedin_reveal'>BishopAI</span>
                        <div id='linkedin_image' />
                      </div>
                    </a> */}

                  </p>
                  <img src={chess} width="100%" alt="Bishop AI" style={{border:'2px solid #c9c9c9'}}/>
                </div>
              </div>
            </div>


            {/* Yelp recommender */}
            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 4em 0"}}>
              <div style={{width:"80%", margin:"1em 0 0 0"}}>
                <div style={{float:"left", width:"40%", fontSize:"3vw", marginLeft:'-14px'}}>
                  <ul style={{listStyleType:"none"}}>
                    <li><h1 style={{float:"left", width:"100%"}}>Business Recommender System</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Machine Learning Engineer</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Aug 2020 - Dec 2020</h4></li>
                  </ul>
                </div>
                <div style={{float:"right", width:"56%", textAlign:"left"}}>
                  <p style={{fontSize:"20px"}}>
                    A business recommendation system built using collaborative filtering and content-based algorithms and trained on the Yelp Academic dataset.
                  </p>


                  {
                      theme.mode == 'dark'?
                      <a href='https://www.yelp.com/dataset' target='_blank' rel="noopener noreferrer">
                        <div id='linkedin_btn_dark' style={{fontSize:'18px'}}>
                          <span id='linkedin_label_dark'>Yelp dataset</span>
                          <span id='linkedin_reveal_dark'>Yelp Academic dataset</span>
                          <div id='linkedin_image_dark' />
                        </div>
                      </a>
                      :
                      <a href='https://www.yelp.com/dataset' target='_blank' rel="noopener noreferrer">
                        <div id='linkedin_btn' style={{fontSize:'18px'}}>
                          <span id='linkedin_label'>Yelp dataset</span>
                          <span id='linkedin_reveal'>Yelp Academic dataset</span>
                          <div id='linkedin_image' />
                        </div>
                      </a>
                    }

                  {/* <a href='https://www.yelp.com/dataset' target='_blank' rel="noopener noreferrer">
                    <div id='linkedin_btn' style={{fontSize:'18px'}}>
                      <span id='linkedin_label'>Yelp dataset</span>
                      <span id='linkedin_reveal'>Yelp Academic dataset</span>
                      <div id='linkedin_image' />
                    </div>
                  </a> */}
                  
                </div>
              </div>
            </div>


            {/* Atom payroll */}
            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 4em 0"}}>
              <div style={{width:"80%", margin:"1em 0 0 0"}}>
                <div style={{float:"left", width:"40%", fontSize:"3vw", marginLeft:'-14px'}}>
                  <ul style={{listStyleType:"none"}}>
                    <li><h1 style={{float:"left", width:"100%"}}>Atom Payroll</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Front End Developer</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jan 2019 - May 2019</h4></li>
                  </ul>
                </div>
                <div style={{float:"right", width:"56%", textAlign:"left"}}>
                  <p style={{fontSize:"20px"}}>
                    <p>
                      An employee management web application suitable for large companies. It offers useful functions such as add, delete, edit, sort, and search. We used React.js and Bootstrap for frontend, MongoDB for backend, and Auth0 for user authentication.
                    </p>

                    {
                      theme.mode == 'dark'?
                      <a href='https://github.com/shawnsuarez/cmpe172-atom' target='_blank' rel="noopener noreferrer">
                        <div id='linkedin_btn_dark' style={{fontSize:'18px'}}>
                          <span id='linkedin_label_dark'>GitHub Repo</span>
                          <span id='linkedin_reveal_dark'>Atom Payroll</span>
                          <div id='linkedin_image_dark' />
                        </div>
                      </a>
                      :
                      <a href='https://github.com/shawnsuarez/cmpe172-atom' target='_blank' rel="noopener noreferrer">
                        <div id='linkedin_btn' style={{fontSize:'18px'}}>
                          <span id='linkedin_label'>GitHub Repo</span>
                          <span id='linkedin_reveal'>Atom Payroll</span>
                          <div id='linkedin_image' />
                        </div>
                      </a>
                    }


                  </p>
                  <div id="atomIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#atomIndicators" data-slide-to="0" className="active"></li>
                      <li data-target="#atomIndicators" data-slide-to="1"></li>
                      <li data-target="#atomIndicators" data-slide-to="2"></li>
                      <li data-target="#atomIndicators" data-slide-to="3"></li>
                      <li data-target="#atomIndicators" data-slide-to="4"></li>
                      <li data-target="#atomIndicators" data-slide-to="5"></li>
                      <li data-target="#atomIndicators" data-slide-to="6"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={atom1} className="d-block w-100" alt="Landing Page"/>
                      </div>
                      <div className="carousel-item">
                        <img src={atom2} className="d-block w-100" alt="Login"/>
                      </div>
                      <div className="carousel-item">
                        <img src={atom3} className="d-block w-100" alt="Employees"/>
                      </div>
                      <div className="carousel-item">
                        <img src={atom4} className="d-block w-100" alt="Departments"/>
                      </div>
                      <div className="carousel-item">
                        <img src={atom5} className="d-block w-100" alt="Add Employee"/>
                      </div>
                      <div className="carousel-item">
                        <img src={atom6} className="d-block w-100" alt="Edit Employee"/>
                      </div>
                      <div className="carousel-item">
                        <img src={atom7} className="d-block w-100" alt="Delete Employee"/>
                      </div>

                    </div>
                    <a className="carousel-control-prev" href="#atomIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" style={{color:"red"}} aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#atomIndicators" style={{color:"red"}} role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>


            {/* Saferway */}
            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 4em 0"}}>
              <div style={{width:"80%", margin:"1em 0 0 0"}}>
                <div style={{float:"left", width:"40%", fontSize:"3vw", marginLeft:'-14px'}}>
                  <ul style={{listStyleType:"none"}}>
                    <li><h1 style={{float:"left", width:"100%"}}>Saferway</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Front End Developer</h4></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jan 2019 - May 2019</h4></li>
                  </ul>
                </div>
                <div style={{float:"right", width:"56%", textAlign:"left"}}>
                  <p style={{fontSize:"20px"}}>
                    <p>
                      An online alternative to Safeway that allows users to buy groceries and common household items easily by search or sorting by categories. Users can create an account to save items in their shopping cart and view their purchase history. We used React.js, Bootstrap, and SemanticUI for frontend and MongoDB for backend.
                    </p>

                    {
                      theme.mode == 'dark'?
                      <a href='https://github.com/dmilin1/SaferWay' target='_blank' rel="noopener noreferrer">
                        <div id='linkedin_btn_dark' style={{fontSize:'18px'}}>
                          <span id='linkedin_label_dark'>GitHub Repo</span>
                          <span id='linkedin_reveal_dark'>Saferway</span>
                          <div id='linkedin_image_dark' />
                        </div>
                      </a>
                      :
                      <a href='https://github.com/dmilin1/SaferWay' target='_blank' rel="noopener noreferrer">
                        <div id='linkedin_btn' style={{fontSize:'18px'}}>
                          <span id='linkedin_label'>GitHub Repo</span>
                          <span id='linkedin_reveal'>Saferway</span>
                          <div id='linkedin_image' />
                        </div>
                      </a>
                    }

                  </p>
                  <div id="saferwayIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#saferwayIndicators" data-slide-to="0" className="active"></li>
                      <li data-target="#saferwayIndicators" data-slide-to="1"></li>
                      <li data-target="#saferwayIndicators" data-slide-to="2"></li>
                      <li data-target="#saferwayIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={saferway1} className="d-block w-100" alt="Homepage"/>
                      </div>
                      <div className="carousel-item">
                        <img src={saferway2} className="d-block w-100" alt="Products"/>
                      </div>
                      <div className="carousel-item">
                        <img src={saferway3} className="d-block w-100" alt="Account"/>
                      </div>
                      <div className="carousel-item">
                        <img src={saferway4} className="d-block w-100" alt="Account"/>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#saferwayIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#saferwayIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {
              theme.mode == 'dark'?
              <BlueLogo />
              :
              <RedLogo />
            }

          </div>
        }
      </div>
    )
  }
}

export default Experience
