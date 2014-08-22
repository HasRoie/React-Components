'use strict';

describe('ModelMixin', function () {
  var ModelMixin, component;

  beforeEach(function () {
    ModelMixin = require('../../../src/scripts/components/ModelMixin.jsx');
    component = ModelMixin();
  });

  it('should create a new instance of ModelMixin', function () {
    expect(component).toBeDefined();
  });
});
