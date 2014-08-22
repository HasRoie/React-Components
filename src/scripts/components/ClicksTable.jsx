/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Table = require('react-bootstrap/Table');
var Grid = require('../../scripts/components/Grid.jsx');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Input = require('react-bootstrap/Input');
var Button = require('react-bootstrap/Button');
var NewEntry = require('../../scripts/components/NewEntry.jsx');
var DeploydMixin = require('../../scripts/components/DeploydMixin.jsx');
var ModelMixin = require('../../scripts/components/ModelMixin.jsx');
var UniqueIdMixin = require('../../scripts/components/UniqueIdMixin.jsx');
var ClicksSchema = require('../../scripts/components/schemas/clicks.schema.js');

var Chart = require('../../scripts/components/Chart.jsx');

var Table = require('react-bootstrap/Table');
var Panel = require('react-bootstrap/Panel');

var ModelTable = require('../../scripts/components/ModelTable.jsx');

require('../../styles/ClicksTable.css');

var ClicksTable = React.createClass({
  mixins: [DeploydMixin,React.addons.LinkedStateMixin, ModelMixin, UniqueIdMixin],

  getInitialState: function(){
    return{
      rules: [],
      model : this.newModel('clicks', ClicksSchema),
      test: '',
      instances: [],
      highlightedCell: ''
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
  saveEntry: function(){
    var newInstance = arguments[0];
    var that = this;

    this.state.model.saveInstance(newInstance, function(updatedModel){
      that.setState({
        'model': updatedModel
      });

    });
  },
  onCellHighlighted: function(cellId){
    this.setState({
      highlightedCell: cellId
    });
  },
  render: function () {
    var items;
    var that = this;

    return (
      <div>
        <div className="ruleEditorWrapper" flex="8">
          <Panel header="Clicks">
            <ModelTable model={this.state.model} doHover={this.onCellHighlighted}></ModelTable>

            <NewEntry model={this.state.model} save={this.saveEntry}></NewEntry>
          </Panel>
        </div>

        <div className="chartWrapper" flex="4">
          <Chart chartId="mychart" data={this.state.instances} type="bar" />
        </div>
      </div>


      );
  }
});

module.exports = ClicksTable;