import React from 'react';

import MyNavbar from './components/MyNavbar'

class Overview extends React.Component{
  render(){
    return(
      <div style={{height:"100%"}}>
        <div>
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
    backgroundImage:"url('https://minimalissimo.com/cms/wp-content/uploads/2019/10/bergmeisterwolf_Aldranz_IMG_4457_GW.jpg')",
    height:"970px",
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    border:"60px solid white"
  },

}

export default Overview
