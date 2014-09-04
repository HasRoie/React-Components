/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Chart = require('components/Chart');

var SelectBox = require('components/select');
var MultiSelectBox = require('components/MultiSelect');
var EditableSelect = require('components/EditableSelect');
var RuleEditor = require('composits/RuleEditor');
var ClicksTable = require('composits/ClicksTable');
var Dashboard = require('composits/Dashboard');


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
require('styles/reset.css');
require('styles/main.css');


var imageURL = '../../images/yeoman.png';

var App = React.createClass({
  mixins: [DeploydMixin],
  getInitialState: function(){
    return {

    }
  },
  componentWillMount: function(){


  },
  componentDidMount: function(){

  },

  render: function() {


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
            <Dashboard />
        </Grid>

      </BSGrid>

    );
  }
});

React.renderComponent(<App />, document.getElementById('content')); // jshint ignore:line

module.exports = App;
