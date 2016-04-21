(function($angular, _) {
	'use strict';

	$angular.module('app', [])
    .run(['$rootScope', "$interval", function($rootScope, $interval) {
        $rootScope.view = 1;
        $interval(function() {
             $rootScope.view = ($rootScope.view === 1 ? 2 : 1);
             console.log($rootScope.view);
        }, 5000);
    }])


})(window.angular, window._);
