/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Table = require('react-bootstrap/Table');
var Grid = require('components/Grid.jsx');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Input = require('react-bootstrap/Input');
var Button = require('react-bootstrap/Button');
var NewEntry = require('components/NewEntry');
var DeploydMixin = require('mixins/DeploydMixin');
var ModelMixin = require('mixins/ModelMixin');
var UniqueIdMixin = require('mixins/UniqueIdMixin');
var RuleSchema = require('schemas/rule.schema.js');

var ModelTable = require('components/ModelTable');

require('styles/RuleEditor.css');

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
