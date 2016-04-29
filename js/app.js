'use strict';

angular.module('app', ['ngMessages'])
    .run(['$rootScope', function($rootScope) {
        $rootScope.thing = 'Hello World';
    }]);