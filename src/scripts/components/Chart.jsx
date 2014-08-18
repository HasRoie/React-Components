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

      return columns;
  },

  componentDidMount: function(){
    var chartInstance = c3.generate({
      bindto: '#' + this.props.chartId,
      data: {
        columns: this.props.columns,
        type: this.props.type,
        x: this.props.x
      },
      groups: this.props.groups,
      grid: this.props.grid,
    });
    this.setState({
      chart: chartInstance,
    })
  },
  componentWillReceiveProps: function(nextProps){
    this.state.chart.load({
      columns: nextProps.columns,
      type: nextProps.type
    })

    this.state.chart.groups([nextProps.groups]);
  },
  render: function () {
    return (
        <div id={this.props.chartId}></div>
    );
  }
});

module.exports = Chart;
