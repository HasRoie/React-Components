/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var _ =     require('lodash');
var serializer = 0;

var Grid = React.createClass({
  componentWillRecieveProps: function(nextProps){

  },
  render: function(){
    var children = this.props.children,
        direction = this.props.direction,
        spread = this.props.spread,
        layoutStyle = this.props.layout,
        children = this.props.children;



    layoutStyle.flexDirection = direction;

    // Build the items
    var items = React.Children.map(children, function(item, i) {

      var content = item.props.children;
      var childStyle = {};

      childStyle.flex = (!_.isUndefined(item.props.flex) && direction == 'row') ? item.props.flex : 1;

      if (direction == 'column'){
      }

      serializer++;

      return this.transferPropsTo(
        <div id={i+serializer} className="child" style={childStyle}>
          {item}
        </div>
      );
    }.bind(this));

    return(
      <div className="layout" style={layoutStyle}>
        {items}
      </div>
    )
  }
});



module.exports = Grid;
