import React from 'react';

import MyNavbar from './components/MyNavbar'

class Experience extends React.Component{
  render(){
    return(
      <div style={{height:"100%"}}>
        <div>
          <MyNavbar />
          <div>
            <div style={{display:"flex", justifyContent:"center", margin:"1em 0 1em 0"}}>
              <div style={{width:"80%", margin:"1em 0 0 0"}}>
                <h4 style={{width:"80%", margin:"28px 0 16px 40px"}}>Work</h4>
                <div style={{float:"left"}}>
                  <ul style={{listStyleType:"none"}}>
                    <li><h1 style={{float:"left"}}>Coding Teacher</h1></li>
                    <li><h4 style={{float:"left", color:"gray"}}>Code With Us</h4></li>
                    <li><h4 style={{float:"left", color:"gray"}}>August 2019 - <i>present</i></h4></li>
                  </ul>
                </div>
                <div style={{float:"right", width:"56%", textAlign:"left"}}>
                  <p style={{fontSize:"20px"}}>
                    I teach kids and teenagers how to code in Scratch, Python, Java, HTML, etc. at various aferschool programs in San Jose and the surrounding area.
                  </p>
                </div>
              </div>
            </div>

            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 4em 0"}}>
              <div style={{width:"80%", margin:"1em 0 0 0"}}>
                <h4 style={{width:"80%", margin:"16px 0 16px 40px"}}>School Projects</h4>
                <div style={{float:"left"}}>
                  <ul style={{listStyleType:"none"}}>
                    <li><h1 style={{float:"left"}}>Front End Developer</h1></li>
                    <li><h4 style={{float:"left", color:"gray"}}>Atom Payroll</h4></li>
                    <li><h4 style={{float:"left", color:"gray"}}>January 2019 - May 2019</h4></li>
                  </ul>
                </div>
                <div style={{float:"right", width:"56%", textAlign:"left"}}>
                  <p style={{fontSize:"20px"}}>
                    An employee management web application suitable for large companies. It offers useful functions such as add, delete, edit, sort, and search.
                    We used React.js for frontend, MongoDB for backend, and Auth0 for user authentication.
                    <br/>
                    <a href="https://github.com/shawnsuarez/cmpe172-atom" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                      github.com/shawnsuarez/cmpe172-atom
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 4em 0"}}>
              <div style={{width:"80%", margin:"1em 0 0 0"}}>
                <div style={{float:"left"}}>
                  <ul style={{listStyleType:"none"}}>
                    <li><h1 style={{float:"left"}}>Front End Developer</h1></li>
                    <li><h4 style={{float:"left", color:"gray"}}>Saferway</h4></li>
                    <li><h4 style={{float:"left", color:"gray"}}>January 2019 - May 2019</h4></li>
                  </ul>
                </div>
                <div style={{float:"right", width:"56%", textAlign:"left"}}>
                  <p style={{fontSize:"20px"}}>
                    An online alternative to Safeway that allows users to buy groceries and common household items easily by search or sorting
                    by categories. Users can create an account to save items in their shopping cart and view their purchase history.
                    We used React.js for frontend and MongoDB for backend.
                    <br/>
                    <a href="https://github.com/dmilin1/SaferWay" alt="GitHub Link" target="_blank" rel="noopener noreferrer" style={{color:"gray"}}>
                      github.com/dmilin1/SaferWay
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
