'use strict';

angular.module('app', ['ngMessages'])
    .run(['$rootScope', function($rootScope) {

    }])

    .controller('UserStatsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.prevDays = 7;
        $scope.loadCounts = function() {
            $scope.resource = '/stats/userStats?prevDays=' + $scope.prevDays;
            $http.get($scope.resource).then( function(response) {
                $scope.userStats = response.data.stats;

                var totalCommits = 0;
                _.each($scope.userStats, function (user, total) {
                    totalCommits += user.count || 0;
                });
                _.each($scope.userStats, function (user, total) {
                    user.commitPercent = Math.round((user.count / totalCommits) * 100);
                });
            });
        };

        $scope.init = function() {
            $scope.loadCounts();
        };
        $scope.init();
    }
    ]);
