'use strict';

angular.module('movieTracker')
  .controller('SearchCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.q = '';
    $scope.search = function() {
      $location.path('/searchResults/' + $scope.q);
    };
  }]);
