/**
 * Created by lairdk on 4/20/16.
 */
'use strict';

angular.module('app')
    .controller('ProjectStatsCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log('ProjectStatsCtrl tally ');

        $http.get("/stats/projectStats").then( function(response) {
            $scope.projectStats = response.data.stats;
            console.log('***** $scope.ProjectStats=', $scope.projectStats);

            var projectTotalCommits = 0;
            _.each($scope.projectStats, function (project) {
                projectTotalCommits += project.count || 0;
            });
            console.log('***** projectTotalCommits=', projectTotalCommits);

            _.each($scope.projectStats, function (project, total) {
                project.commitPercent = Math.round((project.count / projectTotalCommits) * 100);
            });
        });
    }
    ]);

