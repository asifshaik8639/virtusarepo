import React from 'react';

class AboutPage extends React.Component {
  render() {
      
    let header = {
        textAlign : "centre",
        padding: "8px",        
        color: "black",
        borderBottom: "2px solid black"
    }   
    
    let rootContainer = {
        width: "100%",
        display: "table",
        marginBottom: "15px"
    }
    
    let containerBox = {        
        padding: "10px",
        backgroundColor: "#eee",
        color: "white",
        border: "1px solid #ddd",
        float: "left",
        width: "98%",
        marginBottom: "10px",
        boxShadow:"0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)"
        
    }      
   
    let rootHeaderStyle = {
        textAlign: "center",
        fontSize: "30px"
    }
           
    return (
      <div>         
        <div style={rootContainer}>        
            <div style={containerBox}>
                <h1><b> Client side</b> </h1>
                <ul>
                    <li><b> React </b>- A Javascript library for building User Interfaces</li>
                    <li><b> Redux </b>- An application architecture for building User Interfaces</li>
                   <li><b> Ramda  </b>- A practical functional library for JavaScript programmers</li>
                   <li><b> Rxjs  </b>- RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code</li>
                   
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
