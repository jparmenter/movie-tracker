'use strict';

angular.module('movieTracker')
  .factory('movieFactory', function($http) {
    return {
      getMovie : function(movieId) {
        return $http({
          url: 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=a1a55c10ab7a6f461b2adb48cb326e95',
          method: 'GET'
        });
      }
    };
  });