'use strict';

describe('EditableSelect', function () {
  var EditableSelect, component;

  beforeEach(function () {
    EditableSelect = require('../../../src/scripts/components/EditableSelect.jsx');
    component = EditableSelect();
  });

  it('should create a new instance of EditableSelect', function () {
    expect(component).toBeDefined();
  });
});
