'use strict';

describe('Service: Azure', function () {

  // load the service's module
  beforeEach(module('childCareAppApp'));

  // instantiate service
  var Azure;
  beforeEach(inject(function (_Azure_) {
    Azure = _Azure_;
  }));

  it('should do something', function () {
    expect(!!Azure).toBe(true);
  });

});
