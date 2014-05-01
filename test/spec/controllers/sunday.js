'use strict';

describe('Controller: SundayCtrl', function () {

  // load the controller's module
  beforeEach(module('childCareApp'));

  var SundayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SundayCtrl = $controller('SundayCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
