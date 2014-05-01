'use strict';

angular
  .module('childCareAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/signedusers', {
        templateUrl: 'views/signedusers.html',
        controller: 'SignedusersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
