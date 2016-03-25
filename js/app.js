(function($angular, _) {
	'use strict';

	$angular.module('app', [])
    .controller('appController', ['$scope', function($scope) {
        $scope.test = "words";

    }]);

})(window.angular, window._);
