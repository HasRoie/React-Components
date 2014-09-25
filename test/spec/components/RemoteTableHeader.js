'use strict';

describe('RemoteTableHeader', function () {
  var RemoteTableHeader, component;

  beforeEach(function () {
    RemoteTableHeader = require('../../../src/scripts/components/RemoteTableHeader.jsx');
    component = RemoteTableHeader();
  });

  it('should create a new instance of RemoteTableHeader', function () {
    expect(component).toBeDefined();
  });
});
