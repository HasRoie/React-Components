/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var DeploydMixin = {
  list: function(model,cb){
    $.get('http://localhost:2403/' + model,cb);
  },
  create: function(model,obj,cb){
    $.post('http://localhost:2403/' + model,obj,cb);
  },
  get: function(model,id,cb){
    $.get('http://localhost:2403/' + model + '/' + id,cb);
  },
  update: function(model,id,obj,cb){
    $.put('http://localhost:2403/' + model + '/' + id, obj ,cb);
  },
  remove: function(model,id,cb){
    $.ajax({
      url: 'http://localhost:2403/' + model + '/' +id,
      type: 'DELETE',
      success: function(result) {
          cb(data);
      }
    });
  }
}


module.exports = DeploydMixin;
