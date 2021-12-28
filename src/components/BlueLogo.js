import React from 'react';
import storage from 'local-storage-fallback';
import {Link} from 'react-router-dom';


class BlueLogo extends React.Component {
    constructor(props) {
        super(props);   
    }

  render() {
    return(
        <div>
          <Link to="#" onClick = {e =>
                        storage.setItem('theme', JSON.stringify({mode:'light'}))
                      }>
            {/* border */}
            {/* <div style={{height:'40px', width:'60px', float:'right', bottom:'0', right:'0', borderRadius:'4px 0 0 0', borderTop:'1px solid #111111', borderLeft:'1px solid #111111', position:'fixed'}}></div> */}

            {/* circles */}
            {
                this.props.mobile ?
                <div>
                    <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', top:'0', right:'0', backgroundColor:'#021026', margin:'20px 70px 0 0', position:'fixed'}}></div>

                    <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', top:'0', right:'0', backgroundColor:'#103878', margin:'20px 65px 0 0', position:'fixed'}}></div>

                    <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', top:'0', right:'0', backgroundColor:'#2b66c4', margin:'20px 60px 0 0', position:'fixed'}}></div>

                    <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', top:'0', right:'0', backgroundColor:'#4287f5', margin:'20px 55px 0 0', position:'fixed'}}></div>

                    <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', top:'0', right:'0', backgroundColor:'#67abf5', margin:'20px 50px 0 0', position:'fixed'}}></div>
                </div>
                :
                <div>
                    <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', bottom:'0', right:'0', backgroundColor:'#021026', margin:'0 30px 10px 0', position:'fixed'}}></div>

                    <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', bottom:'0', right:'0', backgroundColor:'#103878', margin:'0 25px 10px 0', position:'fixed'}}></div>

                    <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', bottom:'0', right:'0', backgroundColor:'#2b66c4', margin:'0 20px 10px 0', position:'fixed'}}></div>

                    <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', bottom:'0', right:'0', backgroundColor:'#4287f5', margin:'0 15px 10px 0', position:'fixed'}}></div>

                    <div style={{height:'20px', width:'20px', float:'right', borderRadius:'4px', bottom:'0', right:'0', backgroundColor:'#67abf5', margin:'0 10px 10px 0', position:'fixed'}}></div>
                </div>

            }
          </Link>
        </div>
    )
  }
}

export default BlueLogo;
