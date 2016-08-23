'use strict';

angular.module('app', [])
    .run(['$rootScope',function($rootScope) {

    }])
    .controller('UserStatsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.loadCounts = function() {
            $scope.resource = '/stats/userStats?prevDays=7';
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

        $scope.$watch("prevDays.selectedOption", function(newValue, oldValue){
            $scope.loadCounts();
        });
    }
    ]);
