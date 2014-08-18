/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/EditableSelect.css');
var SelectBox = require('../../scripts/components/select.jsx');
var MultiSelectBox = require('../../scripts/components/multi-select.jsx');



var EditableSelect = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    return {
      editing: false,
      value: 'bar',
      set: false
    }
  },


  toggleEdit: function(){
    var toggled = !this.state.editing;
    this.setState({editing: toggled});
  },
  handleChange: function(val){

    this.setState({
      set: true,
      editing: false,
      value: val
    });
  },
  render: function () {
    var styles = {
      color: 'blue'
    };
    
    var editable = (!this.state.editing) ? (
      <div style={styles} onClick={this.toggleEdit}>{this.state.value}</div>
    ) : (
      <div onClick={this.toggleEdit}>
        <SelectBox
          label={this.props.label}
          onChange={this.handleChange}
          value={this.state.value}
          options={this.props.options}
        ></SelectBox>

      </div>
    );

    return (
        <div>
          {editable}
        </div>
      );
  }
});

module.exports = EditableSelect;
