'use strict';

describe('NewEntry', function () {
  var NewEntry, component;

  beforeEach(function () {
    NewEntry = require('../../../src/scripts/components/NewEntry.jsx');
    component = NewEntry();
  });

  it('should create a new instance of NewEntry', function () {
    expect(component).toBeDefined();
  });
});
