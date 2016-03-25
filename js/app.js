(function($angular, _) {
	'use strict';

	$angular.module('app', [])
    .run(['$rootScope', "$interval", function($rootScope, $interval) {
        $rootScope.view = 1;
        $interval(function() {
             $rootScope.view = ($rootScope.view === 1 ? 2 : 1);
             console.log($rootScope.view);
        }, 5000)
    }])
    .controller('projController', ['$scope', '$http', function($scope,$http) {

        // for Compass/SCSS stuff
        $scope.topProjects = [
            {name: "Project1", commits: 524, contrib: 2},
            {name: "project2", commits: 324, contrib: 5},
            {name: "Project3", commits: 142, contrib: 1},
            {name: "Project4", commits: 36, contrib: 10},
            {name: "Project5", commits: 12, contrib: 2},
        ];


        // Expressjs Magic
        // $http.get("/stats/repos").then(function(response){
        //     $scope.topProjects = response.data;
        // });


        // Grab percentage of contribution
        $scope.topProjects.forEach (function(proj){
            var percent = Math.round((proj.commits / $scope.topProjects[0].commits) * 100);
            proj.percent = percent;
            }

        )


    }])

    .controller('contribController', ['$scope', '$http', function($scope,$http) {

        // for Compass/SCSS stuff
        $scope.topContributors = [
            {name: "Peter Parker", commits: 35, proj: 2},
            {name: "Felica Hardy", commits: 23, proj: 5},
            {name: "Mary Jane Watson", commits: 12, proj: 1},
            {name: "J. Jonah Jameson", commits: 11, proj: 10},
            {name: "Phil Urich", commits: 8, proj: 2},
        ];


        // Expressjs Magic
        // $http.get("/stats/repos").then(function(response){
        //     $scope.topProjects = response.data;
        // });


        // Grab percentage of contribution
        $scope.topContributors.forEach (function(contrib){
            var percent = Math.round((contrib.commits / $scope.topContributors[0].commits) * 100);
            contrib.percent = percent;
            }

        )

    }]);

})(window.angular, window._);
