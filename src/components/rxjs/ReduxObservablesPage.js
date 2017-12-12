import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as rxjsActions from '../../actions/rxjsActions';
import { Link, browserHistory } from 'react-router';
import '../../styles/rxjs.css';
import '../../../node_modules/toastr/build/toastr.min.css';
import toastr from '../../../node_modules/toastr/toastr.js';
let intialResultLength = 0;

class ReduxObservablesPage extends React.Component {
 constructor(props) {
     super(props);
     this.buttonClickHandler = this.buttonClickHandler.bind(this);   
     this.dataLoadingStatus = this.dataLoadingStatus.bind(this);  
 } 
    
 buttonClickHandler() {
     console.log('buttonClickHandler');
     this.props.actions.getObservableData();
 }
    
  dataLoadingStatus(result) {
    if(this.props.dataLoading) {    
        if(result && result.length === 0) {
           toastr.info("Loading in progress", "Info");
        }           
    }         
    
   if(this.props.dataLoaded) {            
       console.log('data loaded times **************************');
        if(result && result.length > 0 && intialResultLength != result.length) {
            intialResultLength = result.length;
           toastr.success("Loaded the data successfully");
        }             
    }
  }    
    
  render() { 
    let result = this.props.data;      
    let content = result.map((data) => {        
         return  (<tr key={data.id}>
                    <td className='data'>{data.id}</td>
                    <td className='data'>{data.title}</td>
                    <td className='data'>{data.body}</td>                
                  </tr>);
    }); 
   
    this.dataLoadingStatus(result);    
    
 
    return (
      <div className="jumbotron">
        <h1>Redux Observables </h1>
        
        {
            result && result.length === 0 &&
              <div>
                  <p>Click on the button to get the data</p>
                  <input
                  type="button"
                  value="Redux Observable Click"
                  className="btn btn-primary"
                  onClick={this.buttonClickHandler}/> 
             </div>
        }
        {
            result && result.length > 0 &&
                <div className='tableborder'> 
                     <table className='tableStyle'>
                      <tr>
                        <th className='header'>Id</th>
                        <th className='header'>Title</th>                
                        <th className='header'>Body</th>
                      </tr>
                        {content}
                     </table>
                </div>
        }
        
      </div>
    );
  }
}
                             

function mapStateToProps(state, ownProps) {
 console.log('ReduxObservablesPage state =>',state);
 console.log('ReduxObservablesPage ownprops => ',ownProps);
 
  return {    
    data: state.reduxObservables.rxjsData,
    dataLoading: state.reduxObservables.loading,
    dataLoaded: state.reduxObservables.loaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(rxjsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxObservablesPage);