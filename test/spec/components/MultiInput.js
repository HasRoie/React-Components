'use strict';

describe('MultiInput', function () {
  var MultiInput, component;

  beforeEach(function () {
    MultiInput = require('../../../src/scripts/components/MultiInput.jsx');
    component = MultiInput();
  });

  it('should create a new instance of MultiInput', function () {
    expect(component).toBeDefined();
  });
});
