/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Table = require('react-bootstrap/Table');
var Grid = require('../../scripts/components/Grid.jsx');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');

require('../../styles/RuleEditor.css');
var DeploydMixin = require('../../scripts/components/DeploydMixin.jsx');

var RuleEditor = React.createClass({
  mixins: [DeploydMixin],
  getInitialState: function(){
    return{
      rules: []
    }
  },
  componentWillMount: function(){
    var that = this;
    this.list('rules', function(data){
        that.setState({
            rules: data
        })
    });
  },
  render: function () {
    var items;

    if (this.state.rules.length == 0){
      <div> No Rules </div>
    }
    else{
      items = this.state.rules.map(function(entry){
        var rule = entry.rule;
        return(
          <tr>
            <td> {rule.from} </td>
            <td> {rule.to} </td>
            <td> {rule.when} </td>
            <td> {rule.trend} </td>
            <td> {rule.threshold} </td>
            <td> {rule.resolution} </td>
          </tr>
        )
      });
    }

    return (
      <Table striped bordered condensed hover>
        <thead>
          <th>From</th>
          <th>To</th>
          <th>When</th>
          <th>Trend</th>
          <th>Threshold</th>
          <th>Resolution</th>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
      );
  }
});

module.exports = RuleEditor;
