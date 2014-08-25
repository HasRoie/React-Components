/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Table = require('react-bootstrap/Table');
require('styles/ModelTable.css');

var EventEmitterMixin = require('mixins/EventEmitter');
var UniqueIdMixin = require('mixins/UniqueIdMixin');


var ModelTable = React.createClass({
  mixins: [EventEmitterMixin, UniqueIdMixin],
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
  doHover: function(e){
    var ref = this.refs[e.target.id];
    this.emit('clickstable', 'tableHover', ref.props);
  },
  render: function () {
    var self = this;
    var headerRow = _.map(self.state.model.fields, function(field){
      return (
        <th>{field}</th>
      )
    });

    var rowIndex = 0;
    var entries = _.map(self.state.instances, function(instance){
      var columnIndex = 0;
      var fields = _.map(self.state.model.fields, function(field){
          var value = instance[field];
          var k = rowIndex + "_" + columnIndex;

          columnIndex++;

          return (
            <td id={k} key={k} ref={k} onMouseOver={self.doHover}>{value}</td>
          )
      });

      var colId = self.makeId() + "_" + columnIndex;
      rowIndex++;


      return (
        <tr key={colId}>
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
