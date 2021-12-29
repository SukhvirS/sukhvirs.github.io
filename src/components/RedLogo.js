import React from 'react';
import storage from 'local-storage-fallback';
import {Link} from 'react-router-dom';


class RedLogo extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
        <div>
          <Link to="#" onClick = {(e) => {
                        storage.setItem('theme', JSON.stringify({mode:'dark'}));
                        window.scrollTo(0, 0);
          }}>
            {/* border */}
            {/* <div style={{height:'40px', width:'60px', float:'right', bottom:'0', right:'0', borderRadius:'4px 0 0 0', borderTop:'1px solid #111111', borderLeft:'1px solid #111111', position:'fixed'}}></div> */}

            {/* circles */}

            {this.props.mobile ?
            <div style={{marginRight:'300px'}}>
              <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', top:'0', right:'0', backgroundColor:'red', margin:'20px 70px 0 0', position:'fixed'}}></div>

              <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', top:'0', right:'0', backgroundColor:'#bd2215', margin:'20px 65px 0 0', position:'fixed'}}></div>

              <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', top:'0', right:'0', backgroundColor:'#8c1308', margin:'20px 60px 0 0', position:'fixed'}}></div>

              <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', top:'0', right:'0', backgroundColor:'#4d0903', margin:'20px 55px 0 0', position:'fixed'}}></div>

              <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', top:'0', right:'0', backgroundColor:'#1a0301', margin:'20px 50px 0 0', position:'fixed'}}></div>
            </div>
            :
            <div>
              <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', bottom:'0', right:'0', backgroundColor:'red', margin:'0 30px 10px 0', position:'fixed'}}></div>

              <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', bottom:'0', right:'0', backgroundColor:'#bd2215', margin:'0 25px 10px 0', position:'fixed'}}></div>

              <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', bottom:'0', right:'0', backgroundColor:'#8c1308', margin:'0 20px 10px 0', position:'fixed'}}></div>

              <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', bottom:'0', right:'0', backgroundColor:'#4d0903', margin:'0 15px 10px 0', position:'fixed'}}></div>

              <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', bottom:'0', right:'0', backgroundColor:'#1a0301', margin:'0 10px 10px 0', position:'fixed'}}></div>
            </div>}
          </Link>
        </div>
    )
  }
}

export default RedLogo;
