/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Chart.css');
require('../../styles/c3.css');
var _ = require('lodash');
var c3 = require('c3/c3.js');
var d3 = require('d3/d3.js');
var EventEmitterMixin = require('../../scripts/components/EventEmitter.jsx');


var Chart = React.createClass({
  mixins: [EventEmitterMixin],
  getInitialState: function(){
    return {
      chart: {},
      isHovered: false,
      highlightedData: this.props.highlightedData
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
  componentWillMount: function(){

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
    });

    this.setState({
      highlightedData: nextProps.highlightedData
    });
  },
  render: function () {
    var highlighted = this.state.highlightedData;
    // console.log(highlighted.cell);
    // if (!_.isUndefined(highlighted.cell)){
    //   console.log(highlighted.cell.getDOMNode().innerHTML);
    // }
    return (
        <div>
          <div>
          {highlighted.key}
          </div>
          <div id={this.props.chartId}></div>
        </div>
    );
  }
});

module.exports = Chart;
