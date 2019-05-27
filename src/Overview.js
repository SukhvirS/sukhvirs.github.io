import React from 'react';

import MyNavbar from './components/MyNavbar'

class Overview extends React.Component{
  render(){
    return(
      <div style={{height:"100%"}}>
        <div style={styles.backgroundImage}>
          <MyNavbar />
          <div style={{fontSize:"160px", textAlign:"center"}}>
            <p style={{height:"140px"}}>S U K H V I R</p>
            <p style={{height:"200px"}}>S I N G H</p>
          </div>
          <p style={{textAlign:"center", fontSize:"50px"}}>
            sukhvir23singh@gmail.com
          </p>
          <p style={{bottom:"0", right:"0", position:"absolute", fontSize:"12px", padding:"0 60px 0 0" }}>
            Photo by Andre Benz
          </p>
        </div>
      </div>
    )
  }
}

const styles = {
  backgroundImage: {
    backgroundImage:"url('https://images.unsplash.com/photo-1492660372153-266c604c29c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
    height:"970px",
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    border:"60px solid white"
  },

  footer:{
    width:"100%",
    textAlign:"center",
    position:"absolute",
    bottom:"0",
    fontWeight:"160px"
  }

}

export default Overview
