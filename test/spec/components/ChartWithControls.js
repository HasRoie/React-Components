'use strict';

describe('ChartWithControls', function () {
  var ChartWithControls, component;

  beforeEach(function () {
    ChartWithControls = require('../../../src/scripts/components/ChartWithControls.jsx');
    component = ChartWithControls();
  });

  it('should create a new instance of ChartWithControls', function () {
    expect(component).toBeDefined();
  });
});
