'use strict';

describe('Controller: SignedusersCtrl', function () {

  // load the controller's module
  beforeEach(module('childCareAppApp'));

  var SignedusersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignedusersCtrl = $controller('SignedusersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
