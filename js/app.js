(function($angular, _) {
	'use strict';

	$angular.module('app', [])
    .controller('appController', ['$scope', '$http', function($scope,$http) {

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
        var percentage = [];
        $scope.topProjects.forEach (function(proj){
            var percent = Math.round((proj.commits / $scope.topProjects[0].commits) * 100);
            proj.percent = percent;
            }

        )

        console.log(percentage);

    }]);

})(window.angular, window._);
