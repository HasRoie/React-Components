'use strict';

describe('Main', function () {
  var ReactC3App, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactC3App = require('../../../src/scripts/components/ReactC3App.jsx');
    component = ReactC3App();
  });

  it('should create a new instance of ReactC3App', function () {
    expect(component).toBeDefined();
  });
});
