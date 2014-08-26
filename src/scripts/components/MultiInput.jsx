/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/MultiInput.css');

// var components = {
//   'Input': require('react-bootstrap/Input')
// }

var Input = require('react-bootstrap/Input');



var MultiInput = React.createClass({
  getDefaultProps: function(){
    return{
      component: React.DOM.div
    }
  },
  componentWillMount: function(){},
  componentDidMount: function(){
    var node = this.getDOMNode();
    React.renderComponent(Input({}), node)
  },
  render: function () {
    // var component = this.props.component;
    return this.transferPropsTo(
      <Input type="text"/>
    )
  }
});

module.exports = MultiInput;
