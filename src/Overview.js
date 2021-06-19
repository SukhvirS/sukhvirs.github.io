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
              A Software Engineering student at San Jose State University currently pursuing a
              Master's Degree in Data Science.
            </p>

          </div>
          :
          <div>
            <div style={{margin:'0 12vw'}}>
              <p style={{fontSize:"calc(5.563vw + 25px)", height:'6.5vw', margin:'-40px 0 0 0'}}>SUKHVIR</p>
              <p style={{fontSize:"calc(5.563vw + 25px)", height:'6.5vw', margin:'0 0 20px 0'}}>SINGH</p>
              <p style={{fontSize:"4vw", color:'grey'}}>sukhvir23singh@gmail.com</p>

              <hr style={{borderTop:'1px solid #d4d4d4'}}/>

              <p style={{fontSize:"3vw", color:"gray"}}>
                A Software Engineering student at San Jose State University currently pursuing a
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
