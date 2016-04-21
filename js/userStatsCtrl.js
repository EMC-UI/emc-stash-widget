/**
 * Created by lairdk on 4/20/16.
 */
'use strict';

angular.module('app')
    .controller('UserStatsCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log('UserStatsCtrl tally ');

        $http.get("/stats/userStats").then( function(response) {
            $scope.userStats = response.data.stats;
            console.log('***** $scope.userStats=', $scope.userStats);

            var userTotalCommits = 0;
            _.each($scope.userStats, function (user, total) {
                userTotalCommits += user.count || 0;
            });
            console.log('***** userTotalCommits=', userTotalCommits);

            _.each($scope.userStats, function (user, total) {
                user.commitPercent = Math.round((user.count / userTotalCommits) * 100);
            });
        });
    }
    ]);

