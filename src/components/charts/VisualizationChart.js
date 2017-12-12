import '../../styles/Visualization.css';
import React, {Component, PropTypes} from 'react';
import d3 from 'd3';
import VisualizationUtils from '../../utils/VisualizationUtils';
const defaultData =[{key: 0, value: 2},
                     {key: 1, value: 3},
                     {key: 2, value: 20},
                     {key: 3, value: 25},
                     {key: 4, value: 23}] ; 

export default class VisualizationChart extends Component {
  
  constructor(props) {    
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.getVariables = this.getVariables.bind(this);
    this.onDataPointClick = this.onDataPointClick.bind(this);
    this.onSvgClick = this.onSvgClick.bind(this);
  }
      
  componentDidMount() {
    const {dataPoints, attributes} = this.getVariables();   

    dataPoints.enter()
      .append("rect")
      .on('click', this.onDataPointClick)
      .attr(attributes);

    window.addEventListener('resize', this.handleResize);
  }
    
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    const {dataPoints, attributes, startAttributes} = this.getVariables();

    dataPoints.transition()
      .attr(attributes);

    dataPoints.enter()
      .append("rect")
      .on('click', this.onDataPointClick)
      .attr(startAttributes)
      .transition()
      .attr(attributes);

    dataPoints.exit()
      .remove();
  }

  handleResize() {
    const {dataPoints, attributes} = this.getVariables();

    dataPoints.transition()
      .duration(0)
      .attr(attributes);
  }

   getVariables() {
    console.log('entered into getVariables method');
    const {width, height} = VisualizationUtils.getDimensions(this.refs.svg, this.props.margin);
    const {xScale, yScale} = VisualizationUtils.getScaleFunctions(this.props.data, width, height);
    const dataPoints = VisualizationUtils.getDataPoints(this.refs.container, this.props.data);
    const attributes = VisualizationUtils.getAttributes(height, xScale, yScale, this.props.selection, this.props.colors);
    const startAttributes = VisualizationUtils.getAnimationStartAttributes(width, height, xScale, this.props.colors);

    return {dataPoints, attributes, startAttributes};
  }

  onDataPointClick(d, i) {
    d3.event.stopPropagation();
    //this.props.onSelect(i);
  }

  onSvgClick() {
    //this.props.onSelect(-1);
  }

  render() {
    console.log('Visualization Render');

    return (
      <div className="Visualization-Container">
        <svg className="Visualization-Canvas" ref="svg" onClick={this.onSvgClick}>
          <g ref="container"
             transform={`translate(${this.props.margin},${this.props.margin})`} />
        </svg>
      </div>
    );
  }
}

 VisualizationChart.propTypes = {
    data: PropTypes.array,
    selection: PropTypes.number,
    onSelect: PropTypes.func,
    margin: PropTypes.number,
    colors: PropTypes.func
    
  }


VisualizationChart.defaultProps = {    
      margin: 20,
      colors: d3.scale.category20(),
      data: defaultData
 }