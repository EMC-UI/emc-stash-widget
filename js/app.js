'use strict';

angular.module('app', [])
    .run(['$rootScope', function($rootScope) {
        $rootScope.thing = 'Hello World';
    }]);