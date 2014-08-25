/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Chart = require('components/Chart');

var SelectBox = require('components/select');
var MultiSelectBox = require('components/multi-select');
var EditableSelect = require('components/EditableSelect');
var RuleEditor = require('components/RuleEditor');
var ClicksTable = require('composits/ClicksTable');


var BSGrid = require('react-bootstrap/Grid');
var PageHeader = require('react-bootstrap/PageHeader');
var DeploydMixin = require('mixins/DeploydMixin');

var Grid = require('components/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Table = require('react-bootstrap/Table');
var Panel = require('react-bootstrap/Panel');

var _ = require('lodash');
// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/reset.css');
require('../../styles/main.css');


var imageURL = '../../images/yeoman.png';

var ReactC3App = React.createClass({
  mixins: [DeploydMixin],
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
        },
        games: []
    }
  },
  componentWillMount: function(){


  },
  componentDidMount: function(){

  },
  handleChange: function(type){
    var newData = _.extend({},this.state.data);
    newData.type = type;
    this.setState({data:newData});
  },
  groupsSelectChange: function(groups){
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

    var mobileApps = [
      {value: 'app1', label: 'Mobile app 1'},
      {value: 'app2', label: 'Mobile app 2'},
      {value: 'app3', label: 'Mobile app 3'},
      {value: 'app4', label: 'Mobile app 4'},
    ];

    var partners = [
      {value: 'partner1', label: 'Mobile partner 1'},
      {value: 'partner2', label: 'Mobile partner 2'},
      {value: 'partner3', label: 'Mobile partner 3'},
      {value: 'partner4', label: 'Mobile partner 4'},
    ];

    var eventTypes = [
      {value: 'event1', label: 'Event 1'},
      {value: 'event2', label: 'Event 2'},
      {value: 'event3', label: 'Event 3'},
      {value: 'event4', label: 'Event 4'},
    ];

    var groupsArr = _.keys(this.state.data.columns[0]);

    var groups = [];

    var layoutOptions = {
      flexWrap: 'wrap',
      justify: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'strech',
      display: 'flex'
    };

    return (

      <BSGrid>
        <PageHeader>
          Reporting POC Demo
        </PageHeader>

        <Grid layout={layoutOptions} direction="row">
            <ClicksTable />
        </Grid>

      </BSGrid>

    );
  }
});

React.renderComponent(<ReactC3App />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactC3App;
