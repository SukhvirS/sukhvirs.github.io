import React from 'react';

import MyNavbar from './components/MyNavbar'

class Overview extends React.Component{
  render(){
    return(
      <div style={{height:"100%"}}>
        <div>
          <MyNavbar />
          <div style={{display:"flex", justifyContent:"center", marginTop:"40px"}}>
            <div style={{marginLeft:"10vw"}}>
              <div style={{float:"left"}}>
                <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=954&q=80" alt="Profile"style={styles.imageStyle}/>
              </div>
            </div>
            <div style={{float:"left", margin:"40px 10vw 0 0"}}>
              <p style={{fontSize:"60px", marginBottom:"-.40em"}}>Sukhvir</p>
              <p style={{fontSize:"60px"}}>Singh</p>
              <p style={{fontSize:"40px"}}>
                Software Engineering student at San Jose State University interested in software UI and machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  imageStyle:{
    float:"left",
    height:"calc((100vh + 30px) / 100 * 74.5)",
    padding:"4vh"
  },
}

export default Overview
