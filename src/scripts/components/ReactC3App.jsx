/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Chart = require('../../scripts/components/Chart.jsx');
var SelectBox = require('../../scripts/components/select.jsx');
var MultiSelectBox = require('../../scripts/components/multi-select.jsx');



var _ = require('lodash');
// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/reset.css');
require('../../styles/main.css');


var imageURL = '../../images/yeoman.png';

var ReactC3App = React.createClass({
  getInitialState: function(){
    return {
        data :{
          columns: [
            ['data1', -30, 200, 200, 400, -150, 250],
            ['data2', 130, 100, -100, 200, -150, 50],
            ['data3', -230, 200, 200, -300, 250, 250]
        ],
          x: 'x',
          type: 'bar',
          groups: ['data1', 'data2']
        },
        grid: {
            y: {
                lines: [{value:0}]
            }
        }
    }
  },
  componentDidMount: function(){

  },
  handleChange: function(type){

    var newData = _.extend({},this.state.data);
    newData.type = type;
    this.setState({data:newData});
  },
  groupsSelectChange: function(groups){
    // console.log('groups', groups);
    var newData = _.extend({},this.state.data);
    newData.groups = groups;
    this.setState({data:newData});
  },
  render: function() {
    var chartTypes = [
      {value: 'bar', label: 'Bar'},
      {value: 'line', label: 'Line'},
      {value:'area', label:'Area'},
      {value:'area-spline', label:'Area Spline'},
      {value:'pie', label:'Pie'},
      {value:'donut', label:'Donut'},
      {value:'gauge', label:'Gauge'}
    ];

    var groups = [
      {
        value: 'data1',
        label: 'Data 1'
      },
      {
        value: 'data2',
        label: 'Data 2'
      },
      {
        value: 'data3',
        label: 'Data 3'
      }
    ];

    return (
      <div className='main'>
        <div className="chartSelector">
          <SelectBox
            label="Select Chart"
            onChange={this.handleChange}
            value={this.state.data.type}
            options={chartTypes}
          ></SelectBox>

          <MultiSelectBox
            label="Select groups"
            onChange={this.groupsSelectChange}
            value={this.state.data.groups}
            options={groups}
          ></MultiSelectBox>



        </div>
        <Chart chartId="mychart" columns={this.state.data.columns} type={this.state.data.type} groups={this.state.data.groups} />
      </div>
    );
  }
});

React.renderComponent(<ReactC3App />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactC3App;
