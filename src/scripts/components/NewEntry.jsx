/**
 * @jsx React.DOM
 */

'use strict';
var i = 0;


var React = require('react/addons');
require('styles/NewEntry.css');
var Grid = require('components/Grid');
var Input = require('react-bootstrap/Input');
var Button = require('react-bootstrap/Button');

var _ = require('lodash');

var NewEntry = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    var model = this.props.model;
    var fields = model.fields;

    var initialState = {
      '_model': model,
      '_fields': fields
    };

    //Replace with extend
    fields.map(function(field){
      initialState[field] = model[field];
    });


    return initialState;
  },
  saveEntry: function(){

  },
  updateChange: function(e){
    var model = this.state._model;
    var fieldList = this.state._fields;
    var that = this;
    fieldList.map(function(field){
      model[field] = that.refs[field].refs.input.getDOMNode().value
    });


    this.setState({'_model': model})
  },
  onSave: function(){
    var self = this;

    var newInstance = {};
    var fieldList = this.state._fields;

    _.each(this.state._fields, function(field){
      newInstance[field] = self.state._model[field];
    });

    newInstance.name = this.state._model.name;
    newInstance.singleName = this.state._model.singleName;

    this.props.save.apply(this, [newInstance]);

  },
  render: function () {
    var that = this;
    var fieldList = this.state._fields;

    var layoutOptions = {
      flexWrap: 'wrap',
      justify: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'strech',
      display: 'flex'
    };


    var fields = fieldList.map(function(field){
      i++;
      return (
        <div className="inputWrapper">
          <Input id={i} label={field} ref={field} type="text" defaultValue={that.state[field]}  onChange={that.updateChange} />
        </div>
      )
    });
    return (
      <div>
        <Grid layout={layoutOptions} direction="row">
          {fields}
        </Grid>
        <Button bs-style="primary" onClick={this.onSave}>Save</Button>
      </div>
      );
  }
});

module.exports = NewEntry;
