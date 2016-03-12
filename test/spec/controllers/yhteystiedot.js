'use strict';

describe('Controller: YhteystiedotCtrl', function () {

  // load the controller's module
  beforeEach(module('hiusApp'));

  var YhteystiedotCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YhteystiedotCtrl = $controller('YhteystiedotCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(YhteystiedotCtrl.awesomeThings.length).toBe(3);
  });
});
