import React from 'react';

import MyNavbar from './components/MyNavbar'

class About extends React.Component{
  render(){
    return(
      <div style={{height:"100%"}}>
        <div>
          <MyNavbar />
          <div style={{margin:"1em"}}>
            <div style={{margin:"4em 0 4em 0"}}>
              <h1 style={{display:"flex", justifyContent:"center"}}>
                SUKHVIR SINGH
              </h1>
              <p style={{display:"flex", justifyContent:"center"}}>
                Software Engineering student interested in software design and real world applications of machine learning.
              </p>
            </div>
            <div style={{margin:"0em 0 3em 0"}}>
              <h3 style={{display:"flex", justifyContent:"center"}}>
                Education:
              </h3>
              <div style={{display:"flex", justifyContent:"center"}}>
                <p>San Jose State Education (August 2015 - <i>present</i> )</p>
              </div>
            </div>
            <div>
              <h3 style={{display:"flex", justifyContent:"center"}}>
                Hobbies:
              </h3>
              <div style={{display:"flex", justifyContent:"center"}}>
                <ul style={{listStyleType:"none", padding:"0"}}>
                  <li>Basketball</li>
                  <li>Drawing</li>
                </ul>
              </div>
            </div>
          </div>

          <p style={{bottom:"0", right:"0", position:"absolute", fontSize:"12px", padding:"0 60px 0 0" }}>
            Photo by Akshar Dave
          </p>
        </div>
      </div>
    )
  }
}

const styles = {
  backgroundImage: {
    backgroundImage:"url('https://i.imgur.com/VJ7Bzpr.jpg')",
    height:"970px",
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    border:"60px solid white"
  },

}

export default About
