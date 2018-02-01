import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sagaActions from '../../actions/sagaActions';
import { Link, browserHistory } from 'react-router';
import '../../../node_modules/toastr/build/toastr.min.css';
import toastr from '../../../node_modules/toastr/toastr.js';
let intialResultLength = 0;


export class ReduxSagaPage extends React.Component {
     constructor(props) {
         super(props);
         this.buttonClickHandler = this.buttonClickHandler.bind(this);
     } 

     buttonClickHandler() {
         console.log('buttonClickHandler');
         this.props.actions.getReduxSagaData();
     }

     dataLoadingStatus(result) {
        if(this.props.dataLoading) {    
            if(result && result.length === 0) {
               toastr.info("Loading of saga in progress", "Info");
            }           
        }         

        if(this.props.dataLoaded) {            
           console.log('data loaded times **************************');
            if(result && result.length > 0 && intialResultLength != result.length) {
                intialResultLength = result.length;
               toastr.success("Loaded the saga data successfully");
            }             
        }
    } 

    
  render() {   
       
      
   let result = this.props.resultObj && this.props.resultObj.resultData
              && this.props.resultObj.resultData.data
              && this.props.resultObj.resultData.data.length > 0
              ? this.props.resultObj.resultData.data : [];   
      
   console.log('in ReduxSagaPage result ',result);  
   
    let content = result.map((output) => {        
         return  (<tr key={output.id}>
                    <td className='data'>{output.id}</td>
                    <td className='data'>{output.name}</td>
                    <td className='data'>{output.email}</td>                
                  </tr>);
    });       
   this.dataLoadingStatus(result);    
   
    return (
      <div className="jumbotron">
           <h1>Redux Saga </h1>
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
                <div>
                    <div className='tableborder'> 
                             <table className='tableStyle'>
                              <tr>
                                <th className='header'>Id</th>
                                <th className='header'>Name</th>                
                                <th className='header'>Email</th>
                              </tr>
                                {content}
                             </table>
                    </div>
                    
                </div>
            }        
         
      </div>
    );
  }
}                             

function mapStateToProps(state, ownProps) {
 console.log('ReduxSagaPage state =>',state);
 console.log('ReduxSagaPage ownprops => ',ownProps);
 
  return {
    resultObj: state.reduxSaga.reduxSagaResultData,
    errorMessage: state.reduxSaga.reduxSagaErrorMessage,  
    dataLoading: state.reduxSaga.loading,
    dataLoaded: state.reduxSaga.loaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sagaActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSagaPage);