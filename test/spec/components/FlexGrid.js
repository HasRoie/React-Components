'use strict';

describe('FlexGrid', function () {
  var FlexGrid, component;

  beforeEach(function () {
    FlexGrid = require('../../../src/scripts/components/FlexGrid.jsx');
    component = FlexGrid();
  });

  it('should create a new instance of FlexGrid', function () {
    expect(component).toBeDefined();
  });
});
