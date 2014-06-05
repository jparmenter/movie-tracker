'use strict';

angular.module('movieTracker')
  .factory('creditsFactory', function($http) {
    return {
      getCredits : function(movieId) {
        return $http({
          url: 'https://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=a1a55c10ab7a6f461b2adb48cb326e95',
          method: 'GET'
        });
      }
    };
  });
