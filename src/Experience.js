import React from 'react';

import MyNavbar from './components/MyNavbar'

class Experience extends React.Component{
  render(){
    return(
      <div style={{height:"100%"}}>
        <div>
          <MyNavbar />
          <div style={{margin:"1em"}}>
            <div style={{margin:"4em 0 4em 0"}}>
              <h1 style={{display:"flex", justifyContent:"center"}}>
                Atom Payroll
              </h1>
              <div style={{fontSize:"20px"}}>
                <p style={{display:"flex", justifyContent:"center"}}>
                  A enterprise level payroll management application. Administrators can easily and quickly add, edit, and remove employees from the databse.
                </p>
                <p style={{display:"flex", justifyContent:"center"}}>
                  Built using ReactJS for the front end and MongoDB for the backend. <b style={{marginLeft:"5px"}}>github.com/shawnsuarez/cmpe172-atom</b>
                </p>
              </div>
            </div>
            <div>
              <h1 style={{display:"flex", justifyContent:"center"}}>
                Chess AI
              </h1>
              <div style={{fontSize:"20px"}}>
                <p style={{display:"flex", justifyContent:"center"}}>
                  A chees engine skilled enough to beat the average player.
                </p>
                <p style={{display:"flex", justifyContent:"center"}}>
                  Built using python with liches.org API for frontend and trained via reinforcement learning.
                </p>
              </div>
            </div>
          </div>
          <p style={{bottom:"0", right:"0", position:"absolute", fontSize:"12px", padding:"0 60px 0 0" }}>
            Photo by Scott Webb
          </p>
        </div>
      </div>
    )
  }
}

const styles = {
  backgroundImage: {
    backgroundImage:"url('https://images.unsplash.com/photo-1495603491717-3d3374928dc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
    height:"970px",
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    border:"60px solid white"
  },

}

export default Experience
