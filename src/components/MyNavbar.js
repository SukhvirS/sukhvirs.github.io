import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import storage from 'local-storage-fallback';

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
        <nav className="navbar navbar-expand-lg fixed-top navbar-light" style={{padding:"8px 60px"}}>
          {
            window.location.href === "http://localhost:3000/" ?
            <Link className="nav-link" to="/" style={{color: theme.mode === 'light' ? 'black' : 'white'
              , outline:"1px solid", outlineColor: theme.mode === 'light' ? 'black':'white'}}>
              HOME
            </Link>
            :
            <Link className="nav-link" to="/" style={{color: theme.mode === 'light' ? 'black' : 'white'}}>
              HOME
           </Link>
          }
          <Link className='nav-link' onClick = {e =>
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
          <div style={{position:"absolute", right:"0", padding:"8px 60px"}}>
            <ul className="navbar-nav">
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
              <li className="nav-item" style={{margin:"0 .5em"}}>
                {
                  window.location.href.indexOf("about") > -1 ?
                  <Link className="nav-link" to="/about" style={{color:theme.mode === 'light' ? 'black' : 'white',
                   outline:"1px solid", outlineColor: theme.mode === 'light' ? 'black':'white'}}>ABOUT ME</Link>
                  :
                  <Link className="nav-link" to="/about" style={{color:theme.mode === 'light' ? 'black' : 'white'}}>
                    ABOUT ME
                  </Link>
                }
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </ThemeProvider>
  );
}

export default MyNavbar;
