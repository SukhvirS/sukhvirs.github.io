import React from 'react';
import {Link} from 'react-router-dom';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import storage from 'local-storage-fallback';
import './NavbarStyles.css';
import sun from '../resources/images/sunny-day.png';
import moon from '../resources/images/moon.png';

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${props => props.theme.mode === 'dark' ? '#111':'#EEE'};
  color: ${props => props.theme.mode === 'dark' ? '#EEE':'#111'}
}
`

class MyNavbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
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

  render(){
    const theme = this.getInitialTheme();
    return(
      <div>
        {
          this.state.width < 750 ?
          <div>
            <ThemeProvider theme={theme}>
              <GlobalStyle/>

              <header className="header">
                {/** Dark mode switch */}
                <div style={{float:"right", margin:"0.5em 2.5em 0 0"}}>
                  {
                    theme.mode === 'dark'?
                    <Link className='nav-link' to="#" onClick = {e =>
                      storage.setItem('theme', JSON.stringify({mode:'light'}))
                    }>
                      <img src={sun} alt="Light Mode" width="25px" />
                    </Link>
                    :
                    <Link className='nav-link' to="#" onClick = {e =>
                      storage.setItem('theme', JSON.stringify({mode:'dark'}))
                    }>
                      <img src={moon} alt="Dark Mode" width="25px"/>
                    </Link>
                  }
                </div>

                {/* drop down menu*/}
                <div style={{padding:"0 2.5em 0 1.5em"}}>
                  <input className="menu-btn" type="checkbox" id="menu-btn" />
                  {
                    theme.mode === 'dark'?
                    <label className="menu-icon-darkMode" htmlFor="menu-btn"><span className="navicon"></span></label>
                    :
                    <label className="menu-icon-lightMode" htmlFor="menu-btn"><span className="navicon"></span></label>
                  }

                  <ul  className="menu">
                    {/* Home */}
                    <li style={{marginLeft:"-1.5em"}}>
                      {
                        window.location.href === "https://sukhvirs.com/#/" ?
                        <Link to="/" style={{color: theme.mode === 'light' ? 'black' : 'white', margin:"0 0 0 48px"}}>
                          H O M E
                        </Link>
                        :
                        <Link to="/" style={{color: "gray", margin:"0 0 0 48px"}}>
                          H O M E
                       </Link>
                      }
                    </li>

                    {/* Skills*/}
                    <li style={{marginLeft:"-1.5em"}}>
                      {
                        window.location.href.indexOf("skills")> -1 ?
                        <Link className="nav-link" to="/skills" style={{color:theme.mode === 'light' ? 'black' : 'white', margin:"0 0 0 48px"}}>
                          S K I L L S
                        </Link>
                        :
                        <Link className="nav-link" to="/skills" style={{color:"gray", margin:"0 0 0 48px"}}>
                          S K I L L S
                        </Link>
                      }
                    </li>

                    {/* Experience */}
                    <li style={{marginLeft:"-1.5em"}}>
                      {
                        window.location.href.indexOf("experience") > -1 ?
                        <Link className="nav-link" to="/experience" style={{color:theme.mode === 'light' ? 'black' : 'white', margin:"0 0 0 48px"}}>
                            E X P E R I E N C E
                        </Link>
                        :
                        <Link className="nav-link" to="/experience" style={{color:"gray", margin:"0 0 0 48px"}}>
                          E X P E R I E N C E
                        </Link>
                      }
                    </li>
                  </ul>
                </div>
              </header>

            </ThemeProvider>
          </div>
          :
          <div>
            <ThemeProvider theme={theme}>
              <GlobalStyle/>
              <div>
                <div className="navbar navbar-expand navbar-light" style={{width:"80vw", margin:"30px 8%", gridFloatBreakpoint:"1600px"}}>

                  {/* Navigatioin buttons*/}
                  <div style={{position:"absolute", right:"0"}}>
                    <ul className="nav navbar-nav">

                      {/* Home */}
                      <li className="nav-item" style={{margin:"0 .5em"}}>
                        {
                          window.location.href === "https://sukhvirs.com/#/" ?
                          <Link className="nav-link" to="/" style={{color: theme.mode === 'light' ? 'black' : 'white'
                            , outline:"1px solid", outlineColor: theme.mode === 'light' ? 'black':'white'}}>
                            HOME
                          </Link>
                          :
                          <Link className="nav-link" to="/" style={{color: theme.mode === 'light' ? 'black' : 'white'}}>
                            HOME
                         </Link>
                        }
                      </li>

                      {/* Skills*/}
                      <li className="nav-item" style={{margin:"0 .5em"}}>
                        {
                          window.location.href.indexOf("skills")> -1 ?
                          <Link className="nav-link" to="/skills" style={{color:theme.mode === 'light' ? 'black' : 'white',
                           outline:"1px solid", outlineColor: theme.mode === 'light' ? 'black':'white'}}>
                            SKILLS
                          </Link>
                          :
                          <Link className="nav-link" to="/skills" style={{color:theme.mode === 'light' ? 'black' : 'white'}}>
                            SKILLS
                          </Link>
                        }
                      </li>

                      {/* Experience */}
                      <li className="nav-item" style={{margin:"0 .5em"}}>
                        {
                          window.location.href.indexOf("experience") > -1 ?
                          <Link className="nav-link" to="/experience" style={{color:theme.mode === 'light' ? 'black' : 'white',
                           outline:"1px solid", outlineColor: theme.mode === 'light' ? 'black':'white'}}>
                            EXPERIENCE
                          </Link>
                          :
                          <Link className="nav-link" to="/experience" style={{color:theme.mode === 'light' ? 'black' : 'white'}}>
                            EXPERIENCE
                          </Link>
                        }
                      </li>
                    </ul>
                  </div>
                </div>

                {/** Dark mode switch */}
                <div className="nav-item" style={{margin:"0 .5em", position:"fixed", right:"60px", bottom:"60px"}}>
                  {
                    theme.mode === 'dark'?
                    <Link className='nav-link' to="#" onClick = {e =>
                      storage.setItem('theme', JSON.stringify({mode:'light'}))
                    }>
                      <img src={sun} alt="Light Mode" width="25px" />
                    </Link>
                    :
                    <Link className='nav-link' to="#" onClick = {e =>
                      storage.setItem('theme', JSON.stringify({mode:'dark'}))
                    }>
                      <img src={moon} alt="Dark Mode" width="25px"/>
                    </Link>
                  }
                </div>
              </div>
            </ThemeProvider>
          </div>
        }
      </div>
    )
  }
}



export default MyNavbar;
