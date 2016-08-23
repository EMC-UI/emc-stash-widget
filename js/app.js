'use strict';

angular.module('app', [])
    .run(['$rootScope', "$interval", function($rootScope, $interval) {
        $rootScope.view = 0;

        $rootScope.views = [
            {id: 0, name: 'User'},
            {id: 1, name: 'Project'},
            {id: 2, name: 'Repo'}
        ];

    }])

    .controller('mainCtrl', ['$scope', '$http', '$rootScope', '$interval', function ($scope, $http, $rootScope, $interval) {

        $scope.setView = function(e) {
            $rootScope.view = e;
            };

        $scope.widgetModeActive = 1;
        $scope.widgetMode = [
                    {id: 0, name: "Auto"},
                    {id: 1, name: "Click"}
                ];

        $scope.prevDays = {
            availableOptions: [
                {days: 1, name: "Last 24 Hours"},
                {days: 7, name: "Last 7 Days"},
                {days: 14, name: "Last 14 Days"},
                {days: 30, name: "Last 30 Days"}
            ],
            selectedOption: {days: 7, name: "Last 7 Days"} //This sets the default value of the select in the ui
        };

        var startPresentation;
        $scope.$watch("widgetModeActive", function(newValue, oldValue){

            if($scope.widgetModeActive === 0) {
                startPresentation = $interval(function() {
                        switch ($rootScope.view) {
                            case 0: $rootScope.view = 1; break;
                            case 1: $rootScope.view = 0; break;
                            // case 2: $rootScope.view = 0; break;
                            default: $rootScope.view = 0;
                        }
                    }, 5000);


            } else if ($scope.widgetModeActive === 1) {
                $interval.cancel(startPresentation);
                console.log("stopped!");

            }
        });

     }])
    .controller('ProjectStatsCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {


        $scope.loadCounts = function () {

            $scope.resource = '/stats/projectStats?prevDays=' + $scope.prevDays.selectedOption.days;
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

        $scope.$watch("prevDays.selectedOption", function(newValue, oldValue){
            $scope.loadCounts();
        });

    }])

    .controller('RepoStatsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.repoStats = [];
        $scope.loadCounts = function () {
            $scope.resource = '/stats/repoStats?prevDays=' + $scope.prevDays.selectedOption.days;
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

        $scope.$watch("prevDays.selectedOption", function(newValue, oldValue){
            $scope.loadCounts();
        });
    }])

    .controller('UserStatsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.loadCounts = function() {
            $scope.resource = '/stats/userStats?prevDays=' + $scope.prevDays.selectedOption.days;
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
