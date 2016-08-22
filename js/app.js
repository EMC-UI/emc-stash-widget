'use strict';

angular.module('app', [])
    .run(['$rootScope', function($rootScope) {

        $rootScope.hello = 'hello world';

    }]);