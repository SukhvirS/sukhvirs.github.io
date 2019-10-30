import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import storage from 'local-storage-fallback';
import './NavbarStyles.css';

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${props => props.theme.mode === 'dark' ? '#111':'#EEE'};
  color: ${props => props.theme.mode === 'dark' ? '#EEE':'#111'}
}
`

function getInitialTheme(){
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : {mode:'light'}
}


function MyNavbar() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(
    () => {
      storage.setItem('theme', JSON.stringify(theme));
    },
    [theme]
  );
  return(
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
                  window.location.href === "http://localhost:3000/#/" ?
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
          <Link className='nav-link' to="#" onClick = {e =>
            setTheme(
              theme.mode === 'dark' ? {mode:'light'} : {mode:'dark'}
            )
          }>
            {
            theme.mode === 'light' ?
            <img src="https://i.ibb.co/7nXDpCX/moon.png" alt="Dark Mode" width="25px"/>
            :
            <img src="https://i.ibb.co/54yRWHL/sunny-day.png" alt="Light Mode" width="25px" />
            }
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyNavbar;
