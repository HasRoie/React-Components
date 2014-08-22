'use strict';

describe('UniqueIdMixin', function () {
  var UniqueIdMixin, component;

  beforeEach(function () {
    UniqueIdMixin = require('../../../src/scripts/components/UniqueIdMixin.jsx');
    component = UniqueIdMixin();
  });

  it('should create a new instance of UniqueIdMixin', function () {
    expect(component).toBeDefined();
  });
});
