(function($angular, _) {
	'use strict';

	$angular.module('app', [])
    .controller('appController', ['$scope', function($scope) {

        $scope.topProjects = [
            {name: "Project1", commits: 524, contrib: 2},
            {name: "project2", commits: 324, contrib: 5},
            {name: "Project3", commits: 142, contrib: 1},
            {name: "Project4", commits: 36, contrib: 10},
            {name: "Project5", commits: 12, contrib: 2},
        ];


    }]);

})(window.angular, window._);
