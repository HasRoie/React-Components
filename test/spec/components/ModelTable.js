'use strict';

describe('ModelTable', function () {
  var ModelTable, component;

  beforeEach(function () {
    ModelTable = require('../../../src/scripts/components/ModelTable.jsx');
    component = ModelTable();
  });

  it('should create a new instance of ModelTable', function () {
    expect(component).toBeDefined();
  });
});
