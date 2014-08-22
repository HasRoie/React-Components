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
var RuleSchema = require('../../scripts/components/schemas/rule.schema.js');

var ModelTable = require('../../scripts/components/ModelTable.jsx');

require('../../styles/RuleEditor.css');

var RuleEditor = React.createClass({
  mixins: [DeploydMixin,React.addons.LinkedStateMixin, ModelMixin, UniqueIdMixin],

  getInitialState: function(){
    return{
      rules: [],
      model : this.newModel('rules', RuleSchema),
      test: ''
    }
  },
  componentWillMount: function(){
    var that = this;

  },
  saveEntry: function(){
    var newInstance = arguments[0];


    var that = this;

    this.state.model.saveInstance(newInstance, function(updatedModel){
      console.log('updated', updatedModel);
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

        <ModelTable model={this.state.model}></ModelTable>

        <NewEntry model={this.state.model} save={this.saveEntry}></NewEntry>


      </div>
      );
  }
});

module.exports = RuleEditor;
