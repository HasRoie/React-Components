'use strict';

describe('Chart', function () {
  var Chart, component;

  beforeEach(function () {
    Chart = require('../../../src/scripts/components/Chart.jsx');
    component = Chart();
  });

  it('should create a new instance of Chart', function () {
    expect(component).toBeDefined();
  });
});
