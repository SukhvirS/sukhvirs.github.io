import React from 'react';

import MyNavbar from './components/MyNavbar';

class Skills extends React.Component{
  render(){
    return(
      <div style={{height:"100%"}}>
        <div style={styles.backgroundImage}>
          <MyNavbar />
          <div>
            <div style={{display:"flex", justifyContent:"center", margin:"4em 0 1em 0"}}>
              <div style={{width:"900px"}}>
                <h1 style={{float:"left", margin:"0 120px"}}>General</h1>
                <ul style={{listStyleType:"none", float:"right", fontSize:"20px"}}>
                  <li>
                    Public Speaking
                  </li>
                  <li>
                    Agile & Waterfall Development
                  </li>
                  <li>
                    Git
                  </li>
                  <li>
                    Microsoft Office
                  </li>
                  <li>
                    Fluent in English, Hindi, Punjabi
                  </li>
                </ul>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", margin:"1em 0"}}>
              <div style={{width:"900px"}}>
                <h1 style={{float:"left", margin:"0 120px"}}>Languages</h1>
                <div style={{float:"right", width:"272px", textAlign:"left"}}>
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
                <div style={{float:"right", width:"272px", textAlign:"left"}}>
                  <ul style={{listStyleType:"none", float:"left", fontSize:"20px", padding:"0"}}>
                    <li>
                      HTML / CSS
                    </li>
                    <li>
                      Javascript
                    </li>
                    <li>
                      ReactJS
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
                <div style={{float:"right", width:"272px", textAlign:"left"}}>
                  <ul style={{listStyleType:"none", float:"left", fontSize:"20px", padding:"0"}}>
                    <li>
                      MATLAB
                    </li>
                    <li>
                      Linear Regression
                    </li>
                    <li>
                      Logistic Regression
                    </li>
                    <li>
                      SVM
                    </li>
                    <li>
                      K-means
                    </li>
                    <li>
                      PCA
                    </li>
                    <li>
                      Deep Neural Networks
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p style={{bottom:"0", right:"0", position:"absolute", fontSize:"12px", padding:"0 60px 0 0" }}>
            Photo by Andre Benz
          </p>
        </div>
      </div>
    )
  }
}

const styles = {
  backgroundImage: {
    backgroundImage:"url('https://images.unsplash.com/photo-1492714673295-07efb43ddaf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
    height:"970px",
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    border:"60px solid white",
  },

  footer:{
    width:"100%",
    textAlign:"center",
    position:"absolute",
    bottom:"0",
    fontWeight:"160px"
  }
}

export default Skills
