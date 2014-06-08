'use strict';

angular.module('movieTracker')
  .factory('imageRepoFactory', function() {
    return {
      getImageBase : function() {
        return 'http://image.tmdb.org/t/p/w92';
      }
    };
  });
