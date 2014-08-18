'use strict';

describe('Navbar', function () {
  var Navbar, component;

  beforeEach(function () {
    Navbar = require('../../../src/scripts/components/Navbar.jsx');
    component = Navbar();
  });

  it('should create a new instance of Navbar', function () {
    expect(component).toBeDefined();
  });
});
