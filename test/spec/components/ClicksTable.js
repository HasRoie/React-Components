'use strict';

describe('ClicksTable', function () {
  var ClicksTable, component;

  beforeEach(function () {
    ClicksTable = require('../../../src/scripts/components/ClicksTable.jsx');
    component = ClicksTable();
  });

  it('should create a new instance of ClicksTable', function () {
    expect(component).toBeDefined();
  });
});
