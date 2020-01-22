import React from 'react';

import MyNavbar from './components/MyNavbar'
import profileImage from './resources/images/profileImage3.jpg';

class Overview extends React.Component{

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
          this.state.width < 750 ?
          <div style={{paddingLeft:"2.7em", paddingRight:"3.5em", marginTop:"100px"}}>
            <div style={{width:"100%", paddingBottom:"1em", marginTop:"15vh"}}>
              <p style={{fontSize:"12vw", textAlign:"center", marginBottom:"-0.5em"}}>
                SUKHVIR
              </p>
              <p style={{fontSize:"12vw", textAlign:"center"}}>
                SINGH
              </p>
            </div>

            <div>
              <p style={{fontSize:"6vw", textAlign:"center"}}>sukhvir23singh@gmail.com</p>
            </div>

            <p style={{fontSize:"3vw", textAlign:"center", fontSize:"5vw", padding:"1em 2em 0 2em", color:"gray"}}>
              I'm a Software Engineering student at San Jose State University currently pursuing a
              Master's Degree in Data Science.
            </p>

            {/*
            <div style={{paddingBottom:"2em"}}>
              <img src={profileImage} alt="Profile" style={{width:"100%", paddingRight:"0"}}/>
            </div>

            <div>
              <p style={{textAlign:"center", fontSize:"6vw"}}>
              Software Engineering student at San Jose State University interested in software UI and machine learning.
              </p>
            </div>
            */}
          </div>
          :
          <div>
          {/*
            <div style={{marginLeft:"10vw"}}>
              <div style={{float:"left"}}>
                <img src={profileImage} alt="Profile" style={styles.imageStyle}/>
              </div>
            </div>
          */}
            <div style={{textAlign:"center", verticalAlign:"middle"}}>
              <p style={{fontSize:"6vw", marginTop:"10vh", marginBottom:"-0.25em"}}>SUKHVIR SINGH</p>
              <p style={{fontSize:"4vw"}}>sukhvir23singh@gmail.com</p>

              <p style={{fontSize:"3vw", padding:"1em 2em 0 2em", color:"gray"}}>
                I'm a Software Engineering student at San Jose State University currently pursuing a
                Master's Degree in Data Science.
              </p>

            </div>
          </div>
        }
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
