'use strict';

describe('FlexTable', function () {
  var FlexTable, component;

  beforeEach(function () {
    FlexTable = require('../../../src/scripts/components/FlexTable.jsx');
    component = FlexTable();
  });

  it('should create a new instance of FlexTable', function () {
    expect(component).toBeDefined();
  });
});
