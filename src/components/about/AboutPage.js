import React from 'react';
import '../../styles/about.css';

class AboutPage extends React.Component {
  render() {      
            
    return (
      <div>         
        <div className='rootContainer'>        
            <div className='containerBox'>
                <h1><b> Client side</b> </h1>
                <ul>
                    <li><b> React </b>- A Javascript library for building User Interfaces</li>
        
                    <li><b> Redux </b>- An application architecture for building User Interfaces</li>
        
                   <li><b> Ramda  </b>- A practical functional library for JavaScript programmers</li>
        
                   <li><b> webpack </b>- is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.</li>

                    <li><b> D3.js  </b>- is a JavaScript Visualisation library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS.</li>

                    <li><b> Redux thunk  </b>- This middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.</li>

                    <li><b> Redux observables </b>- RxJS 5-based middleware for Redux. Compose and cancel async actions to create side effects and more.</li>

                    <li><b>  Redux saga </b>- is a library that aims to make application side effects or asynchronous things easier to manage, more efficient to execute, simple to test, and better at handling failures.</li>

                    <li><b> Json place holder </b>- is a free online REST service that you can use whenever you need some fake data. </li>

                    <li><b> Axios  </b>- Promise based HTTP client for the browser and node.js.</li>

                    <li><b>  promise </b>- A promise represents an operation that hasn't completed yet.</li>

                    <li><b> Bootstrap </b>- Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</li>

                    <li><b> Toastr </b>- is a Javascript library for non-blocking notifications</li>
                </ul>
            </div>
            <div className='containerBox'>
                <h1> <b>Unit testing</b> </h1>
                <ul>
                    <li><b> Mocha </b>- Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun</li>
                    <li><b> Chai </b>- Chai is a BDD / TDD assertion library Node and the browser that can be delightfully paired with any javascript testing framework</li> 
                    <li><b> Sinon </b>- Standalone test spies, stubs and mocks for JavaScript</li> 
                    <li><b> Enzyme </b>- Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.</li>          
                </ul>
            </div>

        </div>
      </div>
    );
  }
}

export default AboutPage;
