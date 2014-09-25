/**
 * @jsx React.DOM
 */

'use strict';

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

var React = require('react/addons');

var Chart = require('components/Chart');
var SelectBox = require('components/select');
var MultiSelectBox = require('components/MultiSelect');
var EditableSelect = require('components/EditableSelect');
var RuleEditor = require('components/RuleEditor');
var ClicksTable = require('composits/ClicksTable');
var FlexGrid = require('components/FlexGrid');
var BootstrapGrid = require('react-bootstrap/FlexGrid');

var PageHeader = require('react-bootstrap/PageHeader');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Table = require('react-bootstrap/Table');
var Panel = require('react-bootstrap/Panel');

var DeploydMixin = require('mixins/DeploydMixin');

var _ = require('lodash');

// CSS
require('styles/reset.css');
require('styles/main.css');


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
        FlexGrid: {
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




    return (
      <div></div>
   
    );
  }
});

React.renderComponent(<ReactC3App />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactC3App;
