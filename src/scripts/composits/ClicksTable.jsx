/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Table = require('react-bootstrap/Table');
var Grid = require('components/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Input = require('react-bootstrap/Input');
var Button = require('react-bootstrap/Button');
var NewEntry = require('components/NewEntry');
var DeploydMixin = require('mixins/DeploydMixin');
var ModelMixin = require('mixins/ModelMixin');
var UniqueIdMixin = require('mixins/UniqueIdMixin');
var EventEmitterMixin = require('mixins/EventEmitter');

var ClicksSchema = require('schemas/clicks.schema.js');
var Chart = require('components/Chart.jsx');
var Table = require('react-bootstrap/Table');
var Panel = require('react-bootstrap/Panel');

var ModelTable = require('components/ModelTable.jsx');


require('styles/ClicksTable.css');

var ClicksTable = React.createClass({
  mixins: [DeploydMixin,React.addons.LinkedStateMixin, ModelMixin, UniqueIdMixin, EventEmitterMixin],

  getInitialState: function(){
    return{
      rules: [],
      model : this.newModel('clicks', ClicksSchema),
      test: '',
      instances: [],
      highlightedData: {},
      chartIsHoveredOver: false,
    }
  },
  componentWillMount: function(){
    var self = this;

    this.state.model.getInstances(this.state.model.name, function(data){
      self.setState({
        instances: data
      });
    })

    this.addListener('clickstable', 'tableHover', function(hoveredCell){
      self.setState({
        highlightedData: hoveredCell
      })
    });
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

  render: function () {
    var items;
    var that = this;

    return (
      <div>
        <div className="ruleEditorWrapper" flex="8">
          <Panel header="Clicks">
            <ModelTable model={this.state.model}></ModelTable>
            <NewEntry model={this.state.model} save={this.saveEntry}></NewEntry>
          </Panel>
        </div>

        <div className="chartWrapper" flex="4">
          <Chart chartId="mychart" data={this.state.instances} type="bar" highlightedData={this.state.highlightedData} />
        </div>
      </div>


      );
  }
});

module.exports = ClicksTable;
