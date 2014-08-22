'use strict';

describe('EventEmitter', function () {
  var EventEmitter, component;

  beforeEach(function () {
    EventEmitter = require('../../../src/scripts/components/EventEmitter.jsx');
    component = EventEmitter();
  });

  it('should create a new instance of EventEmitter', function () {
    expect(component).toBeDefined();
  });
});
