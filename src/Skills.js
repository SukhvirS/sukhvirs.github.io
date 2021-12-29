import React from 'react';
import RedLogo from './components/RedLogo';

import MyNavbar from './components/MyNavbar';
import './skills.css';
import BlueLogo from './components/BlueLogo';
import storage from 'local-storage-fallback';

class Skills extends React.Component{

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
          this.state.width < 750?
          <div style={{paddingLeft:"2.7em", paddingRight:"3.5em", marginTop:"100px"}}>
            
            <div style={{overflow:"auto", paddingBottom:"1.5em"}}>
              <h4 style={{fontSize:"6vw"}}>Machine Learning / Data Science</h4>
              <ul className="mobileUL" style={{float:"left"}}>
                <li>Python</li>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>Scikit-learn</li>
                <li>TensorFlow</li>
                <li>Keras</li>
                <li>Matplotlib</li>
                <li>PySpark</li>
              </ul>
              <ul className="mobileUL" style={{float:"right"}}>
                <li>Seaborn</li>
                <li>OpenCV</li>
                <li>Plotly</li>
                <li>Jupyter</li>
                <li>SQL</li>
                <li>AWS</li>
                <li>GCP</li>
              </ul>
            </div>

            <div style={{overflow:"auto", paddingBottom:"1.5em"}}>
              <h4 style={{fontSize:"6vw"}}>Other</h4>
              <ul className="mobileUL" style={{float:"left"}}>
                <li>Java</li>
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>RESTful APIs</li>
                <li>CI/CD</li>
                <li>AWS</li>
              </ul>
              <ul className="mobileUL" style={{float:"right"}}>
                <li>Heroku</li>
                <li>Bootstrap</li>
                <li>Semantic UI</li>
                <li>Leaflet</li>
                <li>Flask</li>
                <li>jQuery</li>
              </ul>
            </div>

          </div>
          :
          <div style={{width:'80vw', margin:'0 auto'}}>

            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div>
                <h1 style={{float:"left"}}>Machine Learning / Data Science</h1>
                <br/>
                <br/>
                {/* <hr style={{borderTop:'1px solid #3d3d3d', width:'75vw'}}/> */}
                {
                  theme.mode == 'dark'?
                  <hr style={{borderTop:'1px solid #3d3d3d', width: '75vw'}} />
                  :
                  <hr style={{borderTop:'1px solid #d4d4d4', width: '75vw'}} />
                }
                <div style={{fontSize:'20px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                
                  <ul style={{listStyleType:'none', padding:'0', margin:'0', color:'gray'}}>
                    <li>Python</li>
                    <li>NumPy</li>
                    <li>Pandas</li>
                    <li>Matplotlib</li>
                  </ul>

                  <ul style={{listStyleType:'none', padding:'0', margin:'0', color:'gray'}}>
                    <li>Scikit-learn</li>
                    <li>TensorFlow</li>
                    <li>Keras</li>
                    <li>PyTorch</li>
                  </ul>

                  <ul style={{listStyleType:'none', padding:'0', margin:'0', color:'gray'}}>
                    <li>SQL</li>
                    <li>Seaborn</li>
                    <li>Plotly</li>
                    <li>OpenCV</li>
                  </ul>

                  <ul style={{listStyleType:'none', padding:'0', margin:'0', color:'gray'}}>
                    <li>AWS</li>
                    <li>GCP</li>
                    <li>Jupyter</li>
                  </ul>
                  

                  {/* Python &nbsp;&nbsp;&nbsp;
                  NumPy &nbsp;&nbsp;&nbsp;
                  Pandas &nbsp;&nbsp;&nbsp;
                  Scikit-learn &nbsp;&nbsp;&nbsp;
                  TensorFlow &nbsp;&nbsp;&nbsp;
                  Keras &nbsp;&nbsp;&nbsp;
                  PySpark &nbsp;&nbsp;&nbsp;
                  Matplotlib &nbsp;&nbsp;&nbsp;
                  Seaborn &nbsp;&nbsp;&nbsp;
                  Plotly &nbsp;&nbsp;&nbsp;
                  OpenCV &nbsp;&nbsp;&nbsp;
                  Jupyter &nbsp;&nbsp;&nbsp;
                  SQL &nbsp;&nbsp;&nbsp;
                  AWS &nbsp;&nbsp;&nbsp;
                  GCP &nbsp;&nbsp;&nbsp; */}
                </div>

              </div>
            </div>
            <br/>

            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div>
                <h1 style={{float:"left"}}>Other</h1>
                <br/>
                <br/>
                {/* <hr style={{borderTop:'1px solid #3d3d3d', width:'75vw'}}/> */}
                {
                  theme.mode == 'dark'?
                  <hr style={{borderTop:'1px solid #3d3d3d', width: '75vw'}} />
                  :
                  <hr style={{borderTop:'1px solid #d4d4d4', width: '75vw'}} />
                }
                <div style={{fontSize:'20px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>

                  <ul style={{listStyleType:'none', padding:'0', margin:'0', color:'gray'}}>
                    <li>HTML / CSS</li>
                    <li>Javascript</li>
                    <li>PHP</li>
                    <li>jQuery</li>
                  </ul>

                  <ul style={{listStyleType:'none', padding:'0', margin:'0', color:'gray'}}>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                    <li>Semantic UI</li>
                    <li>Flask</li>
                  </ul>

                  <ul style={{listStyleType:'none', padding:'0', margin:'0', color:'gray'}}>
                    <li>RESTFUL APIs</li>
                    <li>Heroku</li>
                    <li>CI / CD</li>
                  </ul>

                  {/* Java &nbsp;&nbsp;&nbsp;
                  HTML/CSS &nbsp;&nbsp;&nbsp;
                  Javascript &nbsp;&nbsp;&nbsp;
                  PHP &nbsp;&nbsp;&nbsp;
                  RESTful APIs &nbsp;&nbsp;&nbsp;
                  CI/CD &nbsp;&nbsp;&nbsp;
                  Heroku &nbsp;&nbsp;&nbsp;
                  AWS &nbsp;&nbsp;&nbsp;
                  Flask &nbsp;&nbsp;&nbsp;
                  React.js &nbsp;&nbsp;&nbsp;
                  Bootstrap &nbsp;&nbsp;&nbsp;
                  Semantic UI &nbsp;&nbsp;&nbsp;
                  Leaflet &nbsp;&nbsp;&nbsp;
                  jQuery &nbsp;&nbsp;&nbsp; */}

                </div>
              </div>
            </div>

            {/* <div style={{height:'30px', width:'30px', bottom:'0', borderRadius:'6px', right:'0', backgroundColor:'red', position:'absolute', margin:'0 10px 10px 0'}}></div> */}

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

export default Skills
