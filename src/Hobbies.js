import React from 'react';

import MyNavbar from './components/MyNavbar'

class Hobbies extends React.Component{
  render(){
    return(
      <div>
        <MyNavbar />
        <div style={{margin:"1em"}}>
          <h1>Hobbies</h1>
        </div>
      </div>
    )
  }
}

export default Hobbies
