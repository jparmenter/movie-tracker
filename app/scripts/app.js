'use strict';

angular.module('movieTracker', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'partials/movie',
        controller: 'MovieCtrl'
      })
      .when('/searchResults/:q', {
        templateUrl: 'partials/searchResults',
        controller: 'SearchResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
