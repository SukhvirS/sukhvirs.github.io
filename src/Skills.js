import React from 'react';

import MyNavbar from './components/MyNavbar';

class Skills extends React.Component{
  render(){
    return(
      <div>
        <MyNavbar />
        <div style={{padding:"1em"}}>
          <h1>Skills</h1>
        </div>
      </div>
    )
  }
}

export default Skills
