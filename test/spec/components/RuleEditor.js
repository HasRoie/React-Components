'use strict';

describe('RuleEditor', function () {
  var RuleEditor, component;

  beforeEach(function () {
    RuleEditor = require('../../../src/scripts/components/RuleEditor.jsx');
    component = RuleEditor();
  });

  it('should create a new instance of RuleEditor', function () {
    expect(component).toBeDefined();
  });
});
