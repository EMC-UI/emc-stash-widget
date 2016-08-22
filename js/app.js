'use strict';

angular.module('app', [])
    .run(['$rootScope', '$http', function($rootScope, $http) {
        //$http.get
        $rootScope.track = 'Front End Only';
    }]);
