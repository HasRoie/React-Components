'use strict';

describe('ComparisonReport', function () {
  var ComparisonReport, component;

  beforeEach(function () {
    ComparisonReport = require('../../../src/scripts/components/ComparisonReport.jsx');
    component = ComparisonReport();
  });

  it('should create a new instance of ComparisonReport', function () {
    expect(component).toBeDefined();
  });
});
