import '../../styles/Visualization.css';
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as chartActions from '../../actions/chartActions';
import { browserHistory } from 'react-router';
import Rpick from '../../../node_modules/ramda/src/pick';
import VisualizationChart from './VisualizationChart';
import '../../styles/shared.scss';

class ChartsPage extends React.Component {
  constructor(props) {
    super(props);
    //this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.getVisualization = this.getVisualization.bind(this);
  }  
    
  getVisualization() {
    const props = {
      data: this.props.data,
      selection: this.props.selection,
      onSelect: this.props.onSelect
    };
    return <VisualizationChart {...props} />;      
  }    

  render() {
    const {data } = this.props;
    
    console.log(' chartsData == > ',data)  ;
     return (
      <div className="Visualization">
        <h3 className="chart-header">Data Visualization with D3 </h3>         
        {this.getVisualization()}
      </div>
    );
  }
}

ChartsPage.propTypes = {
  data: PropTypes.array.isRequired,
  selection: PropTypes.number,
  value: PropTypes.string,
  onSelect: PropTypes.func
};

//const mapStateToProps = Rpick(['chartData']);

function mapStateToProps(state, ownProps) {
 
  return {
    data: state.charts,
    selection: -1,
    value: ""      
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartsPage);
