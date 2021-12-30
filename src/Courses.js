import React from 'react';

import MyNavbar from './components/MyNavbar';
import down from './resources/images/down.png';
import up from './resources/images/up.png';

import './experience.css';
import RedLogo from './components/RedLogo';
import storage from 'local-storage-fallback';
import BlueLogo from './components/BlueLogo';


class Courses extends React.Component{

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
      cmpe272Collapse: false,
      cmpe273Collapse: false,
      cmpe274Collapse: false
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
    this.toggleCMPE272 = this.toggleCMPE272.bind(this);
    this.toggleCMPE273 = this.toggleCMPE273.bind(this);
    this.toggleCMPE274 = this.toggleCMPE274.bind(this);
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

  toggleCMPE272(){
      this.setState({
          cmpe272Collapse: !this.state.cmpe272Collapse
      })
  }

  toggleCMPE273(){
      this.setState({
          cmpe273Collapse: !this.state.cmpe273Collapse
      })
  }

  toggleCMPE274(){
      this.setState({
          cmpe274Collapse: !this.state.cmpe274Collapse
      })
  }


  render(){
    const theme = this.getInitialTheme();
    return(
      <div style={{fontFamily:"Circular"}}>
        <MyNavbar />
        {
          this.state.width < 750 ?
          <div style={{padding:"0 3.5em 2em 2.7em", marginTop:"100px"}}>
            <h4 style={{margin:"1em 0 0 0"}}>Grad</h4>
            {
              theme.mode == 'dark'?
              <hr style={{borderTop:'1px solid #3d3d3d', marginBottom:'-10px'}} />
              :
              <hr style={{borderTop:'1px solid #d4d4d4', marginBottom:'-10px'}} />
            }


            {/* CMPE 256 */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseSSAI" onClick={this.toggleSSAICollapse}>
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>CMPE 256</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Advanced Data Mining</h4></li>
                    {/* <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Jun 2021 - Aug 2021</h4></li> */}
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
                Data mining and machine learning algorithms and applications for big data. Recommender systems, ranking and evaluation, graph mining, social network analysis, sentiment analysis, advanced topics.
              </div>
            </div>


            {/* CMPE 258 */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseResearch" onClick={this.toggleResearchCollapse}>
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>CMPE 258</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Deep Learning</h4></li>
                    {/* <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Aug 2020 - Sep 2021</h4></li> */}
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
                Deep neural networks and their applications to various problems, e.g., speech recognition, image segmentation, and natural language processing. Covers underlying theory, the range of applications to which it has been applied, and learning from very large data sets.
              </div>
            </div>



            {/* CMPE 272 */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseCMPE272" onClick={this.toggleCMPE272}>
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>CMPE 272</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Enterprise Software Platforms</h4></li>
                    {/* <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Aug 2019 - Mar 2020</h4></li> */}
                  </ul>
                </div>
                {
                  this.state.cmpe272Collapse ?
                  <img src={up} alt="Up" width="30px" style={{float:"right"}}/>
                  :
                  <img src={down} alt="Down" width="30px" style={{float:"right"}}/>
                }
              </div>
            </div>
            <div>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseCMPE272">
                {/* <hr style={{borderTop:"1px solid #aaa"}}/> */}
                Enterprise software, system and virtualized platforms. OSs, NOS, security, databases (OLTP, big data, analytics), transactions, groupware, components, web services, web, systems management, and app development. Standards and emerging technologies.
              </div>
            </div>

            {/* CMPE 273 */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseCMPE273" onClick={this.toggleCMPE273}>
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>CMPE 273</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Enterprise Distributed Systems</h4></li>
                    {/* <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Aug 2019 - Mar 2020</h4></li> */}
                  </ul>
                </div>
                {
                  this.state.cmpe273Collapse ?
                  <img src={up} alt="Up" width="30px" style={{float:"right"}}/>
                  :
                  <img src={down} alt="Down" width="30px" style={{float:"right"}}/>
                }
              </div>
            </div>
            <div>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseCMPE273">
                {/* <hr style={{borderTop:"1px solid #aaa"}}/> */}
                Introduction to application protocols for large scale distributed systems including object request brokers, asynchronous messaging, and Web services. Lab is based on using protocols to build distributed systems.
              </div>
            </div>

            {/* CMPE 274 */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseCMPE274" onClick={this.toggleCMPE274}>
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>CMPE 274</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Business Intelligence</h4></li>
                    {/* <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Aug 2019 - Mar 2020</h4></li> */}
                  </ul>
                </div>
                {
                  this.state.cmpe274Collapse ?
                  <img src={up} alt="Up" width="30px" style={{float:"right"}}/>
                  :
                  <img src={down} alt="Down" width="30px" style={{float:"right"}}/>
                }
              </div>
            </div>
            <div>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseCMPE274">
                {/* <hr style={{borderTop:"1px solid #aaa"}}/> */}
                Analyze and mine business data to understand and improve business performance by transforming business data into information into knowledge
              </div>
            </div>




            <h4 style={{margin:"2em 0 0 0"}}>Undergrad</h4>
            {/* <hr style={{borderTop:'1px solid #d4d4d4', marginBottom:'-10px'}} /> */}
            {
              theme.mode == 'dark'?
              <hr style={{borderTop:'1px solid #3d3d3d', marginBottom:'-10px'}} />
              :
              <hr style={{borderTop:'1px solid #d4d4d4', marginBottom:'-10px'}} />
            }

            {/* CS 146 */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseAbstractReasoning" onClick={this.toggleAbstractReasoningCollapse} >
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>CS 146</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Data Structures and Algorithms</h4></li>
                    {/* <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Jan 2021 - Dec 2021</h4></li> */}
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
                Implementations of advanced tree structures, priority queues, heaps, directed and undirected graphs. Advanced searching and sorting (radix sort, heapsort, mergesort, and quicksort). Design and analysis of data structures and algorithms. Divide-and-conquer, greedy, and dynamic programming algorithm design techniques.
              </div>
            </div>


            {/* CS 151 */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseChess" onClick={this.toggleChessCollapse} >
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>CS 151</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Object-Oriented Design</h4></li>
                    {/* <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Jan 2019 - Dec 2019</h4></li> */}
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
                Design of classes and interfaces. Object-oriented design methodologies and notations. Design patterns. Generics and reflection. Exception handling. Concurrent programming. Graphical user interface programming. Software engineering concepts and tools. Required team-based programming assignment.
              </div>
            </div>


            {/* CS 156 */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseYelpRecommender" onClick={this.toggleYelpRecommenderCollapse} >
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>CS 156</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Introduction to Artificial Intelligence</h4></li>
                    {/* <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Aug 2020 - Dec 2020</h4></li> */}
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
                Basic concepts and techniques of artificial intelligence: problem solving, search, deduction, intelligent agents, knowledge representation. Topics chosen from logic programming, game playing, planning, machine learning, natural language, neural nets, robotics.

              </div>
            </div>


            {/* CS 157a */}
            <div style={{display:"flex", margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseAtomPayroll" onClick={this.toggleAtomCollapse} >
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>CS 157A</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Database Management Systems</h4></li>
                    {/* <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Jan 2019 - May 2019</h4></li> */}
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
                Relational data model. Relational algebra. Standard SQL. Design theory. Conceptual data modeling. Integrity constraints and triggers. Views and indexes. Transactions. Distributed data management. Interactive and programmatic interfaces to database systems. Application programming project using a prominent database system.
              </div>
            </div>


            {/* CMPE 172 */}
            <div style={{display:"flex",margin:"10px 0 0 0"}}>
              <div style={{width:"100vw", margin:"1em 0 0 0"}} data-toggle="collapse" href="#collapseSaferway" onClick={this.toggleSaferwayCollapse}>
                <div style={{float:"left", width:"60%"}}>
                  <ul style={{listStyleType:"none", padding:"0"}}>
                    <li><h1 style={{float:"left", width:"100%", fontSize:"6vw"}}>CMPE 172</h1></li>
                    <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Enterprise Software Platforms</h4></li>
                    {/* <li><h4 style={{float:"left", color:"gray", width:"100%", fontSize:"4vw"}}>Jan 2019 - May 2019</h4></li> */}
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
            <div style={{margin:"0 0 4em 0"}}>
              <div style={{fontSize:"4vw"}} className="collapse" id="collapseSaferway">
                {/* <hr style={{borderTop:"1px solid #aaa"}}/> */}
                Introduction to enterprise software systems. Covers network operating systems, DBMS, transaction monitors, groupware, distributed objects, system management and the Web. Covers standards such as J2EE, CORBA, SQL, JDBC, and HTTP; and emerging software technologies.
              </div>
            </div>
          </div>
          :
          <div>
            <div style={{display:"flex", justifyContent:"center"}}>
              <div style={{width:"80vw"}}>
                <h4 style={{margin:"10px 0 16px 30px"}}>Grad</h4>
                {/* <hr style={{borderTop:'1px solid #d4d4d4', width:'76vw'}}/> */}
                {
                  theme.mode == 'dark'?
                  <hr style={{borderTop:'1px solid #3d3d3d', width: '76vw'}} />
                  :
                  <hr style={{borderTop:'1px solid #d4d4d4', width: '76vw'}} />
                }

                {/* CMPE 256 */}
                <div style={{display:'inline-block'}}>
                    <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                    <ul style={{listStyleType:"none"}}>
                        <li><h1 style={{float:"left", width:"100%"}}>CMPE 256</h1></li>
                        <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Advanced Data Mining</h4></li>
                        {/* <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jun 2021 - Aug 2021</h4></li> */}
                    </ul>
                    </div>
                    <div style={{float:"right", width:"56%", textAlign:"left"}}>
                    <p style={{fontSize:"20px"}}>
                    Data mining and machine learning algorithms and applications for big data. Recommender systems, ranking and evaluation, graph mining, social network analysis, sentiment analysis, advanced topics.
                    </p>
                    </div>
                </div>

                {/* CMPE 258 */}
                <div style={{display:'inline-block'}}>
                    <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                    <ul style={{listStyleType:"none"}}>
                        <li><h1 style={{float:"left", width:"100%"}}>CMPE 258</h1></li>
                        <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Deep Learning</h4></li>
                        {/* <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jun 2021 - Aug 2021</h4></li> */}
                    </ul>
                    </div>
                    <div style={{float:"right", width:"56%", textAlign:"left"}}>
                    <p style={{fontSize:"20px"}}>
                    Deep neural networks and their applications to various problems, e.g., speech recognition, image segmentation, and natural language processing. Covers underlying theory, the range of applications to which it has been applied, and learning from very large data sets.
                    </p>
                    </div>
                </div>

                {/* CMPE 272 */}
                <div style={{display:'inline-block'}}>
                    <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                    <ul style={{listStyleType:"none"}}>
                        <li><h1 style={{float:"left", width:"100%"}}>CMPE 272</h1></li>
                        <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Enterprise Software Platforms</h4></li>
                        {/* <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jun 2021 - Aug 2021</h4></li> */}
                    </ul>
                    </div>
                    <div style={{float:"right", width:"56%", textAlign:"left"}}>
                    <p style={{fontSize:"20px"}}>
                    Enterprise software, system and virtualized platforms. OSs, NOS, security, databases (OLTP, big data, analytics), transactions, groupware, components, web services, web, systems management, and app development. Standards and emerging technologies.
                    </p>
                    </div>
                </div>

                {/* CMPE 273 */}
                <div style={{display:'inline-block'}}>
                    <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                    <ul style={{listStyleType:"none"}}>
                        <li><h1 style={{float:"left", width:"100%"}}>CMPE 273</h1></li>
                        <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Enterprise Distributed Systems</h4></li>
                        {/* <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jun 2021 - Aug 2021</h4></li> */}
                    </ul>
                    </div>
                    <div style={{float:"right", width:"56%", textAlign:"left"}}>
                    <p style={{fontSize:"20px"}}>
                    Introduction to application protocols for large scale distributed systems including object request brokers, asynchronous messaging, and Web services. Lab is based on using protocols to build distributed systems.
                    </p>
                    </div>
                </div>

                {/* CMPE 274 */}
                <div style={{display:'inline-block'}}>
                    <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                    <ul style={{listStyleType:"none"}}>
                        <li><h1 style={{float:"left", width:"100%"}}>CMPE 274</h1></li>
                        <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Business Intelligence</h4></li>
                        {/* <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jun 2021 - Aug 2021</h4></li> */}
                    </ul>
                    </div>
                    <div style={{float:"right", width:"56%", textAlign:"left"}}>
                    <p style={{fontSize:"20px"}}>
                    Analyze and mine business data to understand and improve business performance by transforming business data into information into knowledge.
                    </p>
                    </div>
                </div>

              </div>
            </div>


            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 0 0"}}>
              <div style={{width:"80%", margin:"1em 0 0 0"}}>
                <h4 style={{width:"80%", margin:"16px 0 16px 30px"}}>Undergrad</h4>
                {
                  theme.mode == 'dark'?
                  <hr style={{borderTop:'1px solid #3d3d3d', width: '76vw'}} />
                  :
                  <hr style={{borderTop:'1px solid #d4d4d4', width: '76vw'}} />
                }
              </div>
            </div>


            {/* CS 146 */}
            <div style={{display:"flex", justifyContent:"center", margin:"0 0 0 0"}}>
              <div style={{width:"80%"}}>

                <div style={{display:'inline-block'}}>  
                    <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                        <ul style={{listStyleType:"none"}}>
                            <li><h1 style={{float:"left", width:"100%"}}>CS 146</h1></li>
                            <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Data Structures and Algorithms</h4></li>
                            {/* <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jan 2021 - Dec 2021</h4></li> */}
                        </ul>
                    </div>
                    <div style={{float:"right", width:"56%", textAlign:"left"}}>
                        <div style={{fontSize:"20px"}}>
                            <p>
                                Implementations of advanced tree structures, priority queues, heaps, directed and undirected graphs. Advanced searching and sorting (radix sort, heapsort, mergesort, and quicksort). Design and analysis of data structures and algorithms. Divide-and-conquer, greedy, and dynamic programming algorithm design techniques.
                            </p>
                        </div>
                    </div>
                </div>
              </div>
            </div>


            {/* CS 151 */}
            <div style={{display:"flex", justifyContent:"center", margin:"0 0 4em 0"}}>
              <div style={{width:"80%", margin:'1em 0 0 0'}}>
                <div style={{display:'inline-block'}}> 
                    <div style={{float:"left", width:"40%", marginLeft:'-14px'}}>
                    <ul style={{listStyleType:"none"}}>
                        <li><h1 style={{float:"left", width:"100%"}}>CS 151</h1></li>
                        <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Object-Oriented Design</h4></li>
                        {/* <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jan 2019 - Dec 2019</h4></li> */}
                    </ul>
                    </div>
                    <div style={{float:"right", width:"56%", textAlign:"left"}}>
                        <div style={{fontSize:"20px"}}>
                            <p>
                            Design of classes and interfaces. Object-oriented design methodologies and notations. Design patterns. Generics and reflection. Exception handling. Concurrent programming. Graphical user interface programming. Software engineering concepts and tools. Required team-based programming assignment.
                            </p>

                        </div>
                
                    </div>
                </div>
              </div>
            </div>


            {/* CS 156 */}
            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 4em 0"}}>
              <div style={{width:"80%", margin:"1em 0 0 0"}}>
                <div style={{display:'inline-block'}}> 
                    <div style={{float:"left", width:"40%", fontSize:"3vw", marginLeft:'-14px'}}>
                    <ul style={{listStyleType:"none"}}>
                        <li><h1 style={{float:"left", width:"100%"}}>CS 156</h1></li>
                        <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Introduction to Artificial Intelligence</h4></li>
                        {/* <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Aug 2020 - Dec 2020</h4></li> */}
                    </ul>
                    </div>
                    <div style={{float:"right", width:"56%", textAlign:"left"}}>
                        <p style={{fontSize:"20px"}}>
                            Basic concepts and techniques of artificial intelligence: problem solving, search, deduction, intelligent agents, knowledge representation. Topics chosen from logic programming, game playing, planning, machine learning, natural language, neural nets, robotics.
                        </p>
                    </div>
                </div>
              </div>
            </div>


            {/* CS 157a */}
            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 4em 0"}}>
              <div style={{width:"80%", margin:"1em 0 0 0"}}>
                <div style={{display:'inline-block'}}> 
                    <div style={{float:"left", width:"40%", fontSize:"3vw", marginLeft:'-14px'}}>
                    <ul style={{listStyleType:"none"}}>
                        <li><h1 style={{float:"left", width:"100%"}}>CS 157A</h1></li>
                        <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Database Management Systems</h4></li>
                        {/* <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jan 2019 - May 2019</h4></li> */}
                    </ul>
                    </div>
                    <div style={{float:"right", width:"56%", textAlign:"left"}}>
                        <div style={{fontSize:"20px"}}>
                            <p>
                            Relational data model. Relational algebra. Standard SQL. Design theory. Conceptual data modeling. Integrity constraints and triggers. Views and indexes. Transactions. Distributed data management. Interactive and programmatic interfaces to database systems. Application programming project using a prominent database system.
                            </p>

                        </div>
                    </div>
                </div>
              </div>
            </div>


            {/* CMPE 172 */}
            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 4em 0"}}>
              <div style={{width:"80%", margin:"1em 0 0 0"}}>
                <div style={{display:'inline-block'}}> 
                    <div style={{float:"left", width:"40%", fontSize:"3vw", marginLeft:'-14px'}}>
                    <ul style={{listStyleType:"none"}}>
                        <li><h1 style={{float:"left", width:"100%"}}>CMPE 172</h1></li>
                        <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Enterprise Software Platforms</h4></li>
                        {/* <li><h4 style={{float:"left", color:"gray", width:"100%"}}>Jan 2019 - May 2019</h4></li> */}
                    </ul>
                    </div>
                    <div style={{float:"right", width:"56%", textAlign:"left"}}>
                        <div style={{fontSize:"20px"}}>
                            <p>
                            Introduction to enterprise software systems. Covers network operating systems, DBMS, transaction monitors, groupware, distributed objects, system management and the Web. Covers standards such as J2EE, CORBA, SQL, JDBC, and HTTP; and emerging software technologies.
                            </p>
                        </div>

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

export default Courses
