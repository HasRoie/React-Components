'use strict';

describe('DeploydMixin', function () {
  var DeploydMixin, component;

  beforeEach(function () {
    DeploydMixin = require('../../../src/scripts/components/DeploydMixin.jsx');
    component = DeploydMixin();
  });

  it('should create a new instance of DeploydMixin', function () {
    expect(component).toBeDefined();
  });
});
