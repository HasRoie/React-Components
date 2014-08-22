/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Chart.css');
require('../../styles/c3.css');
var _ = require('lodash');
var c3 = require('c3/c3.js');


var Chart = React.createClass({
  getInitialState: function(){
    return {
      chart: {}
    }
  },
  prepareData: function(data){
      console.log(data);
      var columns = [];
      var keys = _.keys(data[0]);

      _.map(keys,function(key){
          var column = [];
          column.push(key);
          columns.push(column);
      });

      _.map(data, function(entry){
            _.map(keys, function(key,val){
              columns[val].push(entry[key]);
            });
      });
      console.log(columns);
      return columns;
  },

  componentDidMount: function(){
    var chartInstance = c3.generate({
      bindto: '#' + this.props.chartId,
      data: {
        columns: this.prepareData(this.props.data),
        type: this.props.type,
        x: this.props.x
      },
      grid: this.props.grid,
    });
    this.setState({
      chart: chartInstance,
    })
  },

  componentWillReceiveProps: function(nextProps){
    this.state.chart.load({
      columns: this.prepareData(nextProps.data),
      type: nextProps.type
    })
  },
  render: function () {
    return (
        <div id={this.props.chartId}></div>
    );
  }
});

module.exports = Chart;
