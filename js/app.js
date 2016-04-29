'use strict';

angular.module('app', [])
    .run(['$rootScope', "$interval", function($rootScope) {
        $rootScope.thing = 'Hello World';
    }]);
