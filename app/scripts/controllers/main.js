'use strict';

angular.module('app')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a1a55c10ab7a6f461b2adb48cb326e95').success(function(data) {
        $scope.nowPlaying = data;
      });
  }]);