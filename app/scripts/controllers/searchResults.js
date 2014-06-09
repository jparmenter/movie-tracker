'use strict';

angular.module('movieTracker')
  .controller('SearchResultsCtrl', ['$scope', '$routeParams', 'movieSearchFactory', function ($scope, $routeParams, movieSearchFactory) {
    movieSearchFactory.getMovieResults($routeParams.q).success(function(response) {
      $scope.searchResults = response;
    });
  }]);
