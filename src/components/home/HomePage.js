import React from 'react';
import { Link } from 'react-router';
import '../../styles/shared.scss';

class HomePage extends React.Component {
  render() {
    return (
    <div className="jumbotron parent-container-cls">  
        <h3>React Redux Ramda Rxjs POC</h3>
        <div className="margin-cls">
            <span className="span-cls"> for Content Description </span>
            <Link to="about" className="btn btn-primary btn-sm">Swith to About</Link> 
        </div> 
        <div className="margin-cls"> 
            <span className="span-cls"> for Redux thunk</span>
            <Link to="courses" className="btn btn-primary btn-sm">Swith to courses</Link>
        </div>
        <div className="margin-cls"> 
            <span className="span-cls"> for Redux and Rxjs </span>
            <Link to="reduxobservables" className="btn btn-primary btn-sm">Swith to Rxjs</Link>
        </div>
        <div className="margin-cls"> 
            <span className="span-cls"> for reduxsaga </span>
            <Link to="reduxsaga" className="btn btn-primary btn-sm">Swith to reduxsaga</Link>
        </div>
        <div className="margin-cls"> 
            <span className="span-cls"> for Redux and D3 Charts </span>
            <Link to="charts" className="btn btn-primary btn-sm">Swith to charts</Link>
        </div>
        <div className="margin-cls"> 
            <span className="span-cls"> for Application Minification Pie Chart </span>
            <Link to="minification" className="btn btn-primary btn-sm">Swith to Minification Page</Link>
        </div>
    </div>
    );
  }
}

export default HomePage;
