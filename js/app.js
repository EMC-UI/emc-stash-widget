'use strict';

angular.module('app', ['ngMessages'])
    .run(['$rootScope', "$interval", function($rootScope, $interval) {
        $rootScope.view = 1;
        $interval(function() {
             $rootScope.view = ($rootScope.view === 1 ? 2 : 1);
        }, 5000);
    }])

    .controller('ProjectStatsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.prevDays = 7;
        $scope.loadCounts = function () {
            $scope.resource = '/stats/ProjectStats?prevDays=' + $scope.prevDays;
            $http.get($scope.resource).then(function (response) {
                $scope.projectStats = response.data.stats;

                var projectTotalCommits = 0;
                _.each($scope.projectStats, function (project) {
                    projectTotalCommits += project.count || 0;
                });
                _.each($scope.projectStats, function (project, total) {
                    project.commitPercent = Math.round((project.count / projectTotalCommits) * 100);
                });
            });
        };

        $scope.init = function () {
            $scope.loadCounts();
        };
        $scope.init();
    }])

    .controller('UserStatsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.prevDays = 7;
        $scope.loadCounts = function() {
            $scope.resource = '/stats/userStats?prevDays=' + $scope.prevDays;
            $http.get($scope.resource).then( function(response) {
                $scope.userStats = response.data.stats;

                var userTotalCommits = 0;
                _.each($scope.userStats, function (user, total) {
                    userTotalCommits += user.count || 0;
                });
                _.each($scope.userStats, function (user, total) {
                    user.commitPercent = Math.round((user.count / userTotalCommits) * 100);
                });
            });
        };

        $scope.init = function() {
            $scope.loadCounts();
        };
        $scope.init();
    }
    ]);
