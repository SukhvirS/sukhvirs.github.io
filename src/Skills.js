import React from 'react';

import MyNavbar from './components/MyNavbar';

class Skills extends React.Component{
  render(){
    return(
      <div style={{height:"100%"}}>
        <div>
          <MyNavbar />
          <div>
            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 1em 0"}}>
              <div style={{width:"900px", margin:"1em 0 0 0"}}>
                <h1 style={{float:"left", margin:"0 120px"}}>General</h1>
                <div style={{float:"right", width:"330px", textAlign:"left"}}>
                  <ul style={{listStyleType:"none", float:"left", fontSize:"20px", padding:"0"}}>
                    <li>
                      Public Speaking
                    </li>
                    <li>
                      Fluent in English, Hindi, Punjabi
                    </li>
                    <li>
                      Microsoft Office
                    </li>
                    <li>
                      Agile & Waterfall Development
                    </li>
                    <li>
                      Git
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div style={{width:"900px"}}>
                <h1 style={{float:"left", margin:"0 120px"}}>Languages</h1>
                <div style={{float:"right", width:"330px", textAlign:"left"}}>
                  <ul style={{listStyleType:"none", float:"left", fontSize:"20px", padding:"0"}}>
                    <li>
                      Java
                    </li>
                    <li>
                      Python
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div style={{width:"900px"}}>
                <h1 style={{float:"left", margin:"0 120px"}}>Front End</h1>
                <div style={{float:"right", width:"330px", textAlign:"left"}}>
                  <ul style={{listStyleType:"none", float:"left", fontSize:"20px", padding:"0"}}>
                    <li>
                      HTML / CSS
                    </li>
                    <li>
                      Javascript
                    </li>
                    <li>
                      React.js
                    </li>
                    <li>
                      Bootstrap
                    </li>
                    <li>
                      Semantic UI
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div style={{width:"900px"}}>
                <h1 style={{float:"left", margin:"0 120px"}}>Data Science</h1>
                <div style={{float:"right", width:"330px", textAlign:"left"}}>
                  <ul style={{listStyleType:"none", float:"left", fontSize:"20px", padding:"0"}}>
                    <li>
                      TensorFlow
                    </li>
                    <li>
                      NumPy
                    </li>
                    <li>
                      Pandas
                    </li>
                    <li>
                      Keras
                    </li>
                    <li>
                      SciKit Learn
                    </li>
                    <li>
                      Matplotlib
                    </li>
                    <li>
                      Seaborn
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
