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

            {/* <div style={{overflow:"auto", paddingBottom:"1.5em"}}>
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
            </div> */}

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
                <li>Plotly</li>
              </ul>
            </div>

            <div style={{overflow:"auto", paddingBottom:"1.5em"}}>
              <h4 style={{fontSize:"6vw"}}>Front End</h4>
              <ul className="mobileUL" style={{float:"left"}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React.js</li>
              </ul>
              <ul className="mobileUL" style={{float:"right"}}>
                <li>Bootstrap</li>
                <li>Semantic UI</li>
                <li>Leaflet</li>
              </ul>
            </div>

          </div>
          :
          <div style={{width:'80vw', margin:'0 auto'}}>

            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div>
                <h1 style={{float:"left", margin:'0 0 0 30px'}}>Data Science</h1>
                <br/>
                <br/>
                <hr style={{borderTop:'1px solid #d4d4d4', width:'80vw'}}/>
                <div style={{fontSize:'20px', margin:'30px'}}>
                  NumPy &nbsp;&nbsp;&nbsp;
                  Pandas &nbsp;&nbsp;&nbsp;
                  Scikit-learn &nbsp;&nbsp;&nbsp;
                  TensorFlow &nbsp;&nbsp;&nbsp;
                  Keras &nbsp;&nbsp;&nbsp;
                  PySpark &nbsp;&nbsp;&nbsp;
                  Matplotlib &nbsp;&nbsp;&nbsp;
                  Seaborn &nbsp;&nbsp;&nbsp;
                  Plotly &nbsp;&nbsp;&nbsp;
                </div>
                {/* <div style={{margin:'0 0 0 30px'}}>
                  <img src='https://user-images.githubusercontent.com/50221806/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png' width='60px'/>
                  &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png' width='100px'/>
                  &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png' width='90px'/>
                  &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/TensorFlowLogo.svg/1200px-TensorFlowLogo.svg.png' width='80px'/>
                  &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src='https://keras.io/img/logo.png' width='90px'/>
                  &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png' width='90px'/>
                  &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src='https://matplotlib.org/3.2.1/_static/logo2_compressed.svg' width='100px'/>
                </div> */}
              </div>
            </div>
            <br/>

            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div>
                <h1 style={{float:"left", margin:'0 0 0 30px'}}>Front End</h1>
                <br/>
                <br/>
                <hr style={{borderTop:'1px solid #d4d4d4', width:'80vw'}}/>
                <div style={{fontSize:'20px', margin:'30px'}}>
                  HTML &nbsp;&nbsp;&nbsp;
                  CSS &nbsp;&nbsp;&nbsp;
                  Javascript &nbsp;&nbsp;&nbsp;
                  React.js &nbsp;&nbsp;&nbsp;
                  Bootstrap &nbsp;&nbsp;&nbsp;
                  Semantic UI &nbsp;&nbsp;&nbsp;
                  Leaflet
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
