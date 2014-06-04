'use strict';

angular.module('movieTracker')
  .factory('releasesFactory', function($http) {
    return {
      getReleases : function() {
        return $http({
          url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=a1a55c10ab7a6f461b2adb48cb326e95',
          method: 'GET'
        });
      }
    };
  });