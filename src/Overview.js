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
      <div>
        <MyNavbar />
        {
          this.state.width < 750 ?
          <div style={{paddingLeft:"2.7em", paddingRight:"3.5em"}}>
            <div style={{width:"100%", paddingBottom:"1em"}}>
              <p style={{fontSize:"12vw", textAlign:"center"}}>
                S U K H V I R
              </p>
              <p style={{fontSize:"12vw", textAlign:"center"}}>
                S I N G H
              </p>
            </div>

            <div style={{paddingBottom:"2em"}}>
              <img src={profileImage} alt="Profile" style={{width:"100%", paddingRight:"0"}}/>
            </div>

            <div>
              <p style={{textAlign:"center", fontSize:"6vw"}}>
              Software Engineering student at San Jose State University interested in software UI and machine learning.
              </p>
            </div>
          </div>
          :
          <div style={{display:"flex", justifyContent:"center", marginTop:"40px"}}>
            <div style={{marginLeft:"10vw"}}>
              <div style={{float:"left"}}>
                <img src={profileImage} alt="Profile" style={styles.imageStyle}/>
              </div>
            </div>
            <div style={{float:"left", margin:"40px 10vw 0 0"}}>
              <p style={{fontSize:"60px", marginBottom:"-.40em"}}>Sukhvir</p>
              <p style={{fontSize:"60px"}}>Singh</p>
              <p style={{fontSize:"3vw"}}>
                Software Engineering student at San Jose State University interested in software UI and machine learning.
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
