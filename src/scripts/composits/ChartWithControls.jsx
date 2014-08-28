/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Chart = require('components/Chart');
var Grid = require('components/Grid');
var Select = require('components/Select');

require('styles/ChartWithControls.css');

var ChartWithControls = React.createClass({
  getInitialState: function(){
    var chartTypes = [
      {value: 'bar', label: 'Bar'},
      {value: 'line', label: 'Line'},
      {value:'area', label:'Area'},
      {value:'pie', label:'Pie'},
      {value:'donut', label:'Donut'}
    ];

    return {
      chartTypes: chartTypes,
      type: this.props.initialType || 'bar'
    }
  },
  handleChartTypeChange: function(type){
    this.setState({'type' :  type});
  },
  render: function () {

    return this.transferPropsTo(
        <div>            
          <Select
            label="Select Chart"
            onChange={this.handleChartTypeChange}
            value={this.state.type}
            options={this.state.chartTypes}
          ></Select>
          <Chart chartId="mychart" data={this.props.data} type={this.state.type} highlightedData={this.props.highlightedData} />
        </div>
      );
  }
});

module.exports = ChartWithControls;


// groupsSelectChange: function(groups){
//   var newData = _.extend({},this.state.data);
//   newData.groups = groups;
//   this.setState({data:newData});
// },
