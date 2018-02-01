import React from 'react';
import { Link } from 'react-router';
import '../../styles/shared.css';

class HomePage extends React.Component {
  render() {
    return (
    <div className="jumbotron parent-container-cls">  
        <h3>Click on the below link buttons to Visit corresponding pages</h3>
        
        <div className="row  margin-cls"> 
            <div className="col-xs-9"><b>Redux thunk</b> : This middleware allows you to write action creators that return a function instead of an action. To see in aciton click the courses button</div>
            <Link to="courses" className="col-xs-3 btn btn-primary btn-sm">Visit Redux Thunk</Link>
        </div>
        <div className="row margin-cls"> 
            <div className="col-xs-9"><b>Redux Observables</b> : RxJS 5-based middleware to compose and cancel async actions to create side effects and more. To see in aciton click the courses button</div>
            <Link to="reduxobservables" className="col-xs-3 btn btn-primary btn-sm">Visit Redux  Observables</Link>
        </div>
        <div className="row margin-cls"> 
            <div className="col-xs-9"><b>Redux Saga </b> : is a library that aims to make application side effects or asynchronous things easier to manage, more efficient to execute, simple to test, and better at handling failures.</div>
            <Link to="reduxsaga" className="col-xs-3 btn btn-primary btn-sm">Visit Reduxsaga</Link>
        </div>
        <div className="row margin-cls"> 
            <div className="col-xs-9"><b>D3.js </b> : is a JavaScript Visualisation library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS.</div>
            <Link to="charts" className="col-xs-3 btn btn-primary btn-sm">Visit D3 charts</Link>
        </div>
        <div className="row margin-cls">
            <div className="col-xs-9">To see all the technology stack used, click on the Technology Stack button </div>
            <Link to="home" className="col-xs-3 btn btn-primary btn-sm">Visit Technology Stack </Link> 
        </div> 
       
    </div>
    );
  }
}

export default HomePage;
