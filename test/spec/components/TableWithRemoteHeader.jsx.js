'use strict';

describe('TableWithRemoteHeader.jsx', function () {
  var TableWithRemoteHeader.jsx, component;

  beforeEach(function () {
    TableWithRemoteHeader.jsx = require('../../../src/scripts/components/TableWithRemoteHeader.jsx.jsx');
    component = TableWithRemoteHeader.jsx();
  });

  it('should create a new instance of TableWithRemoteHeader.jsx', function () {
    expect(component).toBeDefined();
  });
});
