/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Table = require('react-bootstrap/Table');
require('../../styles/ModelTable.css');

var ModelTable = React.createClass({
  getInitialState: function(){
    return{
      model : this.props.model,
      instances: []
    }
  },
  componentWillMount: function(){
    var self = this;
    this.state.model.getInstances(this.state.model.name, function(data){
      self.setState({
        instances: data
      });
    })
  },
  componentWillReceiveProps: function(nextProps){
    var model = this.state.model;

    model.instances = nextProps.model.instances;
    this.setState({model:model});
  },
  render: function () {
    var self = this;
    var headerRow = _.map(self.state.model.fields, function(field){
      return (
        <th>{field}</th>
      )
    });

    var entries = _.map(self.state.instances, function(instance){
      var fields = _.map(self.state.model.fields, function(field){
          var value = instance[field];
          return (
            <td>{value}</td>
          )
      });
      return (
        <tr>
          {fields}
        </tr>
      );
    });

    return (
        <div>
          <Table striped bordered condensed hover>
            <thead>
              {headerRow}
            </thead>
            <tbody>
              {entries}
            </tbody>
          </Table>
        </div>
      );
  }
});

module.exports = ModelTable;
