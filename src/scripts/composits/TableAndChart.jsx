/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react/addons');

var ClicksSchema = require('schemas/clicks.schema.js');
var FlexGrid = require('components/FlexGrid');
var NewEntry = require('components/NewEntry');

var DeploydMixin = require('mixins/DeploydMixin');
var ModelMixin = require('mixins/ModelMixin');
var UniqueIdMixin = require('mixins/UniqueIdMixin');
var EventEmitterMixin = require('mixins/EventEmitter');

var ChartWithControls = require('composits/ChartWithControls.jsx');
var ModelTable = require('components/ModelTable.jsx');

var Table = require('react-bootstrap/Table');
var Panel = require('react-bootstrap/Panel');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Input = require('react-bootstrap/Input');
var Button = require('react-bootstrap/Button');


require('styles/TabelWithChart.css');

var TabelWithChart = React.createClass({
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
    var model = this.state.model;

    this.state.model.saveInstance(newInstance, function(updatedModel){
      model.instances = updatedModel;
      that.setState({
        'model': model
      });

    });
  },

  render: function () {
    var items;
    var layoutOptions = {
      flexWrap: 'wrap',
      justify: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'strech',
      display: 'flex'
    };

    var that = this;

    return (
      <FlexGrid layout={layoutOptions}>
        <div className="ruleEditorWrapper" flex="8">
          <Panel header="Clicks">
            <ModelTable model={this.state.model}></ModelTable>
            <NewEntry model={this.state.model} save={this.saveEntry}></NewEntry>
          </Panel>
        </div>

        <div className="chartWrapper" flex="4">
          <ChartWithControls chartId="mychart" data={this.state.instances} initialType="bar" highlightedData={this.state.highlightedData} />
        </div>
      </FlexGrid>
    );
  }
});

module.exports = TabelWithChart;
