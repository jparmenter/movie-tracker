'use strict';

angular.module('movieTracker')
  .controller('MovieCtrl', ['$scope', '$routeParams', 'movieFactory', function ($scope, $routeParams, movieFactory) {
    movieFactory.getMovie($routeParams.id).success(function(data) {
        $scope.movie = data;
      });
  }]);