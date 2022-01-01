
import React from 'react';
import MyNavbar from './components/MyNavbar';
import storage from 'local-storage-fallback';
import RedLogo from './components/RedLogo';
import BlueLogo from './components/BlueLogo';

class Page404 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.getInitialTheme = this.getInitialTheme.bind(this);
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


  getInitialTheme(){
    const savedTheme = storage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : {mode:'light'}
  }


  render() {
    const theme = this.getInitialTheme();

    return(
      <div style={{fontFamily:'Circular'}}>
        <MyNavbar />
        <div>
          <p style={{fontSize: 'calc(3.2vw + 20px)', margin:'100px 0 0 0', display:'flex', justifyContent:'center'}}>
            404
          </p>
          <p style={{display:'flex',  justifyContent:'center', fontSize:'32px', color:'grey'}}>Page not found</p>
          <br/>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            {
              theme.mode == 'dark'?
              <a href="/">
                <div id='email_btn_dark'>
                    <span id='email_label_dark'>Home</span>
                    <span id='email_reveal_dark'>Go to homepage</span>
                    <div id='email_image_dark'></div>                      
                </div>
              </a>
              :
              <a href="/">
                <div id='email_btn'>
                    <span id='email_label'>Home</span>
                    <span id='email_reveal'>Go to homepage</span>
                    <div id='email_image'></div>                      
                </div>
              </a>
            }
          </div>
          
          {
            this.state.width < 750 ?
            <div></div>
            :
            theme.mode == 'dark'?
            <BlueLogo />
            :
            <RedLogo />
          }

        </div>
      </div>
    )
  }
}

export default Page404;
