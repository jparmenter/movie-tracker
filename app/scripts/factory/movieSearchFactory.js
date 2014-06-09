'use strict';

angular.module('movieTracker')
  .factory('movieSearchFactory', function($http) {
    return {
      getMovieResults : function(q) {
        return $http({
          url: 'https://api.themoviedb.org/3/search/movie?api_key=a1a55c10ab7a6f461b2adb48cb326e95&query=' + q,
          method: 'GET'
        });
      }
    };
  });
