'use strict';

angular.module('movieTracker')
  .controller('SearchResultsCtrl', ['$scope', '$routeParams', 'movieSearchFactory', function ($scope, $routeParams, movieSearchFactory) {
    movieSearchFactory.getMovieResults($routeParams.q).success(function(response) {
      $scope.searchResults = [];
      var movieSearchResponse = response.results;

      movieSearchResponse.forEach(function(movie) {
        var img = ''
        if (movie.poster_path) {
          img = 'http://image.tmdb.org/t/p/w92' + movie.poster_path;
        }
        $scope.searchResults.push({
          id: movie.id,
          name: movie.original_title,
          release: movie.release_date,
          poster: img
        });
      });
    });
  }]);
