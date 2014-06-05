'use strict';

angular.module('movieTracker')
  .controller('MovieCtrl', ['$scope', '$routeParams', 'movieFactory', 'creditsFactory', function ($scope, $routeParams, movieFactory, creditsFactory) {
    movieFactory.getMovie($routeParams.id).success(function(movieResponse) {
        $scope.movie = movieResponse;
      });

    creditsFactory.getCredits($routeParams.id).success(function(creditsResponse) {
        $scope.credits = creditsResponse;
      });
  }]);
