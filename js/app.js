'use strict';

angular.module('app', ['ngMessages'])
    .run(['$rootScope', "$interval", function($rootScope, $interval) {
        $rootScope.view = 0;

        $rootScope.views = [
            {id: 0, name: 'User'},
            {id: 1, name: 'Project'},
            {id: 2, name: 'Repo'}
        ];

        $interval(function() {
            switch ($rootScope.view) {
                case 0: $rootScope.view = 1; break;
                case 1: $rootScope.view = 2; break;
                case 2: $rootScope.view = 0; break;
                default: $rootScope.view = 0;
            }
        }, 5000);
    }])

    .controller('ProjectStatsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.prevDays = 7;
        $scope.loadCounts = function () {
            $scope.resource = '/stats/projectStats?prevDays=' + $scope.prevDays;
            $http.get($scope.resource).then(function (response) {
                $scope.projectStats = response.data.stats;

                var totalCommits = 0;
                _.each($scope.projectStats, function (project) {
                    totalCommits += project.count || 0;
                });
                _.each($scope.projectStats, function (project, total) {
                    project.commitPercent = Math.round((project.count / totalCommits) * 100);
                });
            });
        };

        $scope.init = function () {
            $scope.loadCounts();
        };
        $scope.init();
    }])

    .controller('RepoStatsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.prevDays = 7;
        $scope.repoStats = [];
        $scope.loadCounts = function () {
            $scope.resource = '/stats/repoStats?prevDays=' + $scope.prevDays;
            $http.get($scope.resource).then(function (response) {
                $scope.repoStats = response.data.stats;

                var totalCommits = 0;
                _.each($scope.repoStats, function (repo) {
                    totalCommits += repo.count || 0;
                });
                _.each($scope.repoStats, function (repo, total) {
                    repo.commitPercent = Math.round((repo.count / totalCommits) * 100);
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
