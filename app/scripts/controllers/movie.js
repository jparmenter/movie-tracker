'use strict';

angular.module('movieTracker')
  .controller('MovieCtrl', ['$scope', '$routeParams', 'movieFactory', 'creditsFactory', function ($scope, $routeParams, movieFactory, creditsFactory) {
    movieFactory.getMovie($routeParams.id).success(function(movieResponse) {
        var movie = movieResponse;
        $scope.title = movie.original_title;
        $scope.releaseDate = movie.release_date;
        $scope.overview = movie.overview;
        $scope.posterImg = 'http://image.tmdb.org/t/p/w185' + movie.poster_path;
        $scope.runtime = movie.runtime;

        var genreString = '';
        for (var i = 0; i < movie.genres.length; i++) {
          genreString += i === movie.genres.length - 1 ? movie.genres[i].name : movie.genres[i].name + ', '
        }
        $scope.genres = genreString;
      });

    creditsFactory.getCredits($routeParams.id).success(function(creditsResponse) {
        $scope.cast = [];
        var credits = creditsResponse;
        var cast = credits.cast;

        cast.forEach(function(actor) {
          var profile = '';
          if (actor.profile_path) {
            profile = 'http://image.tmdb.org/t/p/w45' + actor.profile_path;
          }
          $scope.cast.push({name: actor.name, character: actor.character, img: profile});
        });
      });
  }]);
