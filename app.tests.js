'use strict';

describe('mainController', function () {
    var scope, $httpBackend; //we'll use these in our tests

    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('myApp'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function ($rootScope) {
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('mainController', {
            $scope: scope
        });
    }));
    // tests start here
    it('should have variable users length greater than 0', function () {
        expect(scope.users.length).toBe(0);
    });
});