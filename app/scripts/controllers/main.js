'use strict';

angular.module('movieTracker')
  .controller('MainCtrl', ['$scope', 'releasesFactory', function ($scope, releasesFactory) {
    releasesFactory.getReleases().success(function(data) {
        $scope.nowPlaying = data;
      });
  }]);
