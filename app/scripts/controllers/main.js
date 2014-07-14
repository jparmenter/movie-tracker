'use strict';

angular.module('movieTracker')
  .controller('MainCtrl', ['$scope', 'releasesFactory', function ($scope, releasesFactory) {
    releasesFactory.getReleases().success(function(releasesResponse) {
        $scope.nowPlaying = [];
        var releases = releasesResponse.results;
        releases.forEach(function(movie) {
          var img = '';
          if (movie.poster_path) {
            img = 'http://image.tmdb.org/t/p/w92' + movie.poster_path;
          }
          $scope.nowPlaying.push({
            id: movie.id,
            name: movie.original_title,
            release: movie.release_date,
            poster:img
          });
        })
      });
  }]);
