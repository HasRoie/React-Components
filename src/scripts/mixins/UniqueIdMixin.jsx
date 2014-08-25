/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


var UniqueIdMixin = {
  makeId: function(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
};

module.exports = UniqueIdMixin;
