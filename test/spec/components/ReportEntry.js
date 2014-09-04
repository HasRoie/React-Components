'use strict';

describe('ReportEntry', function () {
  var ReportEntry, component;

  beforeEach(function () {
    ReportEntry = require('../../../src/scripts/components/ReportEntry.jsx');
    component = ReportEntry();
  });

  it('should create a new instance of ReportEntry', function () {
    expect(component).toBeDefined();
  });
});
