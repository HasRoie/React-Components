/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Chart = require('../../scripts/components/Chart.jsx');
var SelectBox = require('../../scripts/components/select.jsx');

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
    var that = this;
    setTimeout(function(){
      that.setState({
         data: {
           columns:[
             ['data1', -30, 2000, 2000, 400, -150, 250],
             ['data2', 130, 100, -100, 2000, -150, 50],
             ['data3', -230, 2000, 2000, -300, 250, 250]
           ],
           groups: ['data1', 'data2', 'data3'],
           type: 'area'
         }
      });
    },2000);
  },
  handleChange: function(type){
    console.log(type);
    var newData = _.extend({},this.state.data);
    newData.type = type;
    this.setState({data:newData});
  },
  renderSelect: function(id, label, values) {
    var options = values.map(function(value) {
      return <option value={value}>{value}</option>
    })
    return this.renderField(id, label,
      <select className="form-control" id={id} ref={id} value={this.state.data.type} onChange={this.updateChartType}>
        {options}
      </select>
    )
  },
   renderField: function(id, label, field) {
    return <div className="form-group">
      <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
      <div className="col-sm-6">
        {field}
      </div>
    </div>
  },
  render: function() {
    var chartTypes = [{value: 'bar', label: 'Bar'}, {value: 'line', label: 'Line'}, {value:'area', label:'Area'}];

    return (
      <div className='main'>
        <div className="chartSelector">
          <SelectBox
            label="Select Chart"
            onChange={this.handleChange}
            value={this.state.data.type}
            options={chartTypes}
          ></SelectBox>
        </div>
        <Chart chartId="mychart" columns={this.state.data.columns} type={this.state.data.type} groups={this.state.data.groups} />
      </div>
    );
  }
});

React.renderComponent(<ReactC3App />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactC3App;
