/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var _ =     require('lodash');
var serializer = 0;

/**
* Mixins
*/
var UniqueIdMixin = require('mixins/UniqueIdMixin');

var FlexGrid = React.createClass({
  mixins: [UniqueIdMixin],
  render: function(){
    var children = this.props.children,
        direction = this.props.direction,
        spread = this.props.spread,
        layoutStyle = this.props.layout,
        children = this.props.children;

    layoutStyle.flexDirection = direction;

    var layoutId = this.makeId() + "_layout";

    // Build the items
    var items = React.Children.map(children, function(item, i) {
      var newId = this.makeId();
      var content = item.props.children;
      var childStyle = {};

      childStyle.flex = (!_.isUndefined(item.props.flex) && direction == 'row') ? item.props.flex : 1;

      if (direction == 'column'){
      }

      serializer++;

      return this.transferPropsTo(
        <div id={newId + "_" +serializer} className="child" style={childStyle}>
          {item}
        </div>
      );
    }.bind(this));

    return(
      <div className="layout" style={layoutStyle} id={layoutId}>
        {items}
      </div>
    )
  }
});



module.exports = FlexGrid;
