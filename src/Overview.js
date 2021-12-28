import React from 'react';

import MyNavbar from './components/MyNavbar'
import profileImage from './resources/images/profileImage3.jpg';
import email_dark from './resources/images/email_dark.png';
import email_light from './resources/images/email_light.png';
import github_dark from './resources/images/github_dark.png';
import github_light from './resources/images/github_light.png';
import linkedin_dark from './resources/images/linkedin_dark.png';
import linkedin_light from './resources/images/linkedin_light.png';

import './Overview.css';

import storage from 'local-storage-fallback';

class Overview extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0,
    };
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
          this.state.width < 750 ?
          <div style={{paddingLeft:"2.7em", paddingRight:"3.5em", marginTop:"100px"}}>
            <div style={{width:"100%", paddingBottom:"1em", marginTop:"15vh"}}>
              <p style={{fontSize:'calc(5.563vw + 20px)', marginBottom:"-0.5em"}}>
                SUKHVIR
              </p>
              <p style={{fontSize:"calc(5.563vw + 20px)", marginBottom:'-20px'}}>
                SINGH
              </p>
            </div>
            <div>
              <p style={{fontSize:"5vw", color:'grey'}}>sukhvir23singh@gmail.com</p>
            </div>

            <hr style={{borderTop:'1px solid #d4d4d4'}}/>

            <p style={{fontSize:"3vw", fontSize:"5vw", color:"gray"}}>
              I'm a <span style={{color:'black'}}>software engineer</span> experienced in building full-stack machine learning applications using big data. Proficient in every step of the <span style={{color:'black'}}>machine learning</span> pipeline, from data collection and preprocessing to model deployment and maintenance.
            </p>

          </div>
          :
          <div>
            <div style={{margin:'0 12vw'}}>
              <p style={{fontSize:"calc(2.563vw + 25px)", height:'6.5vw', margin:'0px 0 0 0'}}>Sukhvir Singh</p>
              {/* <p style={{fontSize:"calc(5.563vw + 25px)", height:'6.5vw', margin:'0 0 20px 0'}}>SINGH</p> */}

              <br/>


              {
                theme.mode == 'dark'?
                <div>

                  <a href="mailto:sukhvir23singh@gmail.com">
                    <div style={{margin:'0 30px 8px 10px', border:'1px solid white', padding:'3px', borderRadius:'30px'}}>
                      <img src={email_light} height='50px'/>
                      sukhvir23singh@gmail.com
                    </div>
                  </a>

                  <a href='https://github.com/SukhvirS' target='_blank'>
                    <img src={github_light} height='50px' style={{margin:'0 30px 8px 10px', border:'1px solid white', padding:'7px', borderRadius:'8px'}}/>
                  </a>
                  {/* <a href='https://github.com/SukhvirS' target='_blank'>https://github.com/SukhvirS</a> */}
                  {/* <br/> */}

                  <a href='https://www.linkedin.com/in/sukhvir-singh-62ba48121/' target='_blank'>
                    <img src={linkedin_light} height='50px' style={{margin:'-7px 30px 0 10px', border:'1px solid white', padding:'7px', borderRadius:'8px'}}/>
                  </a>
                  {/* <a href='https://www.linkedin.com/in/sukhvir-singh-62ba48121/' target='_blank'>https://www.linkedin.com/in/sukhvir-singh-62ba48121/</a> */}

                </div>
                :
                <div>

                  <a href="mailto:sukhvir23singh@gmail.com">
                    <div id='email_btn' style={{border:'1px solid grey', display:'inline-block', padding:'10px 15px 10px 10px', borderRadius:'30px'}}>

                      <div id='email_image'></div>
                      sukhvir23singh@gmail.com
                      
                    </div>
                  </a>

                  <a href='https://www.linkedin.com/in/sukhvir-singh-62ba48121/' target='_blank' style={{margin:'0 10px'}}>
                    <div id='linkedin_btn' style={{border:'1px solid grey', display:'inline-block', padding:'10px 15px 10px 10px', borderRadius:'30px'}}>
                      
                      <div id='linkedin_image' />
                      Sukhvir Singh

                    </div>
                  </a>

                  <a href='https://github.com/SukhvirS' target='_blank'>
                    <div id='github_btn' style={{border:'1px solid grey', display:'inline-block', padding:'10px 15px 10px 10px', borderRadius:'30px'}}>

                        <div id='github_image' />
                        SukhvirS
                        
                      </div>
                  </a>

                </div>
              }
              {/* <img src={email_light} height='50px'/> */}


              {/* <p style={{fontSize:"4vw", color:'grey'}}>sukhvir23singh@gmail.com</p> */}

              <hr style={{borderTop:'1px solid #d4d4d4', margin:'24px 0 10px 0'}}/>

              <p style={{fontSize:"32px", color:"gray"}}>
                I'm a <span style={{color:'black'}}>software engineer</span> experienced in building full-stack machine learning applications using big data. Proficient in every step of the <span style={{color:'black'}}>machine learning</span> pipeline, from data collection and preprocessing to model deployment and maintenance.
              </p>
            </div>
          </div>
        }
        <div style={{height:'30px', width:'30px', float:'right', bottom:'0', right:'0', backgroundColor:'red', margin:'0 10px 10px 0', position:'absolute'}}></div>
      </div>
    )
  }
}

const styles = {
  imageStyle:{
    float:"left",
    width:"calc((100vw + 30px) / 150 * 74.5)",
    padding:"4vh"
  },
}

export default Overview
